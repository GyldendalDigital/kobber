<svelte:options customElement={{tag: "kobber-audio-recorder", shadow: "none"}}/>
<script>
    import {onMount} from "svelte";

    const designTokens = {
        light: {
            backgroundColor: "#DFE2F1",
            recordColor: "#EF3116",
            itemColor: "#fff",
            textColor: "#0F1642"
        },
        dark: {
            backgroundColor: "#0F1642",
            recordColor: "#EF3116",
            itemColor: "#3471a8",
            textColor: "#fff"
        }
    }

    const theme = "light";
    const backgroundColor = designTokens[theme].backgroundColor;
    const recordColor = designTokens[theme].recordColor;
    const itemColor = designTokens[theme].itemColor;
    const textColor = designTokens[theme].textColor;

    /*
    NOTES:
        - Calculating total time before playing through is a bit wonky...
        It seems like the browser because of security does not want to give exact
        timings, which gives a weird result when timing the recording (off by fluctuating values).
        -
     KNOWN BUGS:
        - Sometimes an audio resets playback from 0 (inconsistent).
        Maybe write a check in playAudio() to re-set the value based on currentTimeGlobal.
        - durationChange sometimes runs wild (inconsistent).
        Usually you don't need to re-update the durationchange, so look into analyzing
        the initial with arraybuffer, so the check for previous duration becomes cleaner.
     */

    import { audioBufferToWav, } from "./AudioHelpers.js";

    export let mp3Callback;
    export let audioData;

    let styleGlobal = null;
    let mediaRecorder = null;
    let analyser = null;
    let audioCtx = null;
    let animationId = null;
    let isRecording = false;
    let isPlaying = false;

    let recData = [];
    let audioArray = [];
    let currentTimeGlobal = 0;
    let elapsedTime = 0;
    let audioDurationArray = [];
    let currentAudioIndex = 0;

    // Using window.performance.now(), but could also use date.getTime().
    let audioStartTime = null;
    let audioEndTime = null;

    function roundWithDecimals(num, decimals){
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    // Adds events for audio elements for them to handle playback
    function audioEventSetter(audio, index) {
        audio.addEventListener("ended", onAudioEnd);
        audio.addEventListener("timeupdate", (event) => {
            currentTimeGlobal = elapsedTime + event.target.currentTime;

            styleGlobal.innerHTML = "@scope (.kbr-ar-sound-container) {:scope{input[type=\"range\"]::-webkit-slider-runnable-track " +
                `{background: linear-gradient(to right, #ff9800 0%, #ff9800 ${currentTimeGlobal / timeTotal * 100}%, #fff ${currentTimeGlobal / timeTotal * 100}%, #fff 100%)}}}`;
        });
        audio.addEventListener("durationchange", (event) => {
            if (event.target.duration === Infinity) {
                audioDurationArray[index] = roundWithDecimals((audioEndTime - audioStartTime) / 1000, 1);

                // Consider swapping the code above with this:
                //
                // audioData.arrayBuffer().then((arrayBuffer) => {
                //     audioCtx = new AudioContext();
                //     audioCtx.decodeAudioData(arrayBuffer).then((buffer) => {
                //         console.log(buffer);
                //         audioDurationArray.push(roundWithDecimals(buffer.duration, 2));
                //         console.log(audioDurationArray);
                //         timeTotal = roundWithDecimals(buffer.duration, 2);
                //     });
                // });
                //
            } else if (Number(event.target.duration)) {
                audioDurationArray[index] = roundWithDecimals(Number(event.target.duration), 1);
            }
        });
    }

    $: if (audioData !== undefined && audioArray.length === 0) {
        recData.push([audioData]);
        const newAudio = new Audio();
        newAudio.preload = "metadata";
        newAudio.src = window.URL.createObjectURL(recData[recData.length - 1][0]);
        audioEventSetter(newAudio, 0);
        audioArray.push(newAudio);
    }

    $: if(styleGlobal?.innerHTML) {};

    // Unsure about how to update the timeTotal correctly...
    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;

    // Takes the raw recorded data, creates a new buffer for them,
    // decodes that new buffer, converts to wav, converts to mp3,
    // and finally calls the callback with that mp3.
    function encodeToMP3() {
        console.log(recData);
        Promise.all(recData.map((data) => {return data[0].arrayBuffer()})).then((response) => {
            console.log("response", response);
            let totalByteLength = 0;
            response.forEach((buffer) => {
                totalByteLength += buffer.byteLength;
            });
            let totalBuffer = new Uint8Array(totalByteLength);
            let currentPosition = 0;
            response.forEach((buffer) => {
                totalBuffer.set(new Uint8Array(buffer), currentPosition);
                currentPosition += buffer.byteLength;
            })
            audioCtx.decodeAudioData(totalBuffer.buffer).then((audioBuffer) => {
                // Sidenote: Either rename or export both converting helper functions.
                mp3Callback && mp3Callback(audioBufferToWav(audioBuffer));
            });
        })
    }

    function playAudio() {
        if (isPlaying) {
            isPlaying = false;
            audioArray[currentAudioIndex].pause();
        } else {
            isPlaying = true;
            if (audioArray.length > 0) {
                console.log(audioArray[currentAudioIndex]);
                audioArray[currentAudioIndex].play();
            }
        }
    }

    function stopAudio() {
        audioArray[currentAudioIndex].pause();
        isPlaying = false;
    }

    // Connected to an audio elements onended event
    function onAudioEnd() {
        if (currentAudioIndex < audioArray.length - 1) {
            currentAudioIndex++;
            elapsedTime = currentTimeGlobal;
            audioArray[currentAudioIndex].currentTime = 0;
            audioArray[currentAudioIndex].play();
        } else {
            isPlaying = false;
        }
    }

    // Used to navigate over the array when moving the playhead.
    function findAudioIndex(timestamp, accumulative, array, index) {
        if (array.length > index) {
            if (timestamp >= accumulative && timestamp <= (accumulative + array[index])) {
                elapsedTime = accumulative;
                audioArray[index].currentTime = timestamp - accumulative;
                return index;
            } else {
                accumulative += array[index]
                elapsedTime = accumulative;
                return findAudioIndex(timestamp, accumulative, array, index + 1);
            }
        } else {
            // Experimental to catch calculation errors
            elapsedTime = timeTotal - audioDurationArray[index - 1];
            audioArray[index - 1].currentTime = audioDurationArray[index - 1];
            return index - 1;
        }
    }

    function movePlayhead(event) {
        currentTimeGlobal = Number(event.target.value);
        currentAudioIndex = findAudioIndex(currentTimeGlobal, 0, audioDurationArray, 0);
    }

    // Adds the newest recorded data to the array of audio elements
    function updateRecordings() {
        const newAudio = new Audio();
        newAudio.preload = "auto";
        newAudio.src = window.URL.createObjectURL(recData[recData.length - 1][0]);
        audioEventSetter(newAudio, audioArray.length);
        audioArray.push(newAudio);

        console.log(audioArray);
    }

    function drawSVG() {

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        //animationId = window.requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (const amp of dataArray) {
            sum += amp * amp / 10;
        }

        const volume = Math.sqrt(sum/dataArray.length);
        let nodes = document.getElementById(".kbr-ar-svg")?.childNodes;
        if((nodes.length > 0)) {
            for (let i = 0; i < nodes.length; i++) {
                let adjustment = 0;

                if (i >= nodes.length / 2) {
                    let reverse = (nodes.length - 1) - i
                    adjustment = 1/4 * (reverse + 1)
                } else {
                    adjustment = 1/4 * (i + 1);
                }
                nodes[i].setAttribute("d", `
                    M ${(i * 16) + 2} 16
                    v ${volume / 2 * adjustment}
                    a 2,2 1 0 0 2,2
                    h 8
                    a 2,2 1 0 0 2,-2
                    v -${volume * adjustment}
                    a 2,2 1 0 0 -2,-2
                    h -8
                    a 2,2 1 0 0 -2,2
                    Z`);
            }
        }
        animationId = requestAnimationFrame(drawSVG);
    }

    // drawing the visual feedback of voice used when recording
    function draw() {
        animationId = window.requestAnimationFrame(draw);
        const container = document.getElementById(".visualizer");

        //@ts-ignore
        const canvasCtx = container.getContext("2d");
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyser.getByteTimeDomainData(dataArray);
        canvasCtx.fillStyle = "rgb(200, 200, 200)";
        canvasCtx.fillRect(0, 0, 128, 128);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "rgb(0 0 0)";
        canvasCtx.beginPath();
        const sliceWidth = 128.0 / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * 128) / 2;

            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }
        canvasCtx.lineTo(128, 128 / 2);
        canvasCtx.stroke();
    }

    // Sets up all audio related objects, and then starts recording.
    // Also includes the ondataavailable() event that delivers the
    // recorded data when the recording is finished.
    function startRecording() {
        audioCtx = new AudioContext();
        if (navigator.mediaDevices) {
            navigator.mediaDevices
                .getUserMedia({
                    audio: true,
                    video: false,
                })
                .then((stream) => {
                    recData.push([]);
                    analyser = audioCtx.createAnalyser();
                    const source = audioCtx.createMediaStreamSource(stream);
                    source.connect(analyser);

                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    audioStartTime = window.performance.now();
                    drawSVG();
                });
        }
    }

    // Stops the recording, and handles the data being received.
    async function stopRecording() {
        mediaRecorder.ondataavailable = (e) => {
            recData[recData.length - 1].push(e.data);
            updateRecordings();
            mp3Callback(encodeToMP3());
        };

        audioEndTime = window.performance.now();
        mediaRecorder.stop();
        mediaRecorder.onstop = (e) => {
            e.srcElement.stream.getTracks()[0].stop();
            window.cancelAnimationFrame(animationId);
        };
    }

    function deleteRecording() {
        if (isRecording) {
            stopRecording();
        }
        if (isPlaying) {
            stopAudio()
        }
        if (isRecording === false && isPlaying === false) {
            recData = [];
            audioArray = [];
            currentTimeGlobal = 0;
            elapsedTime = 0;
            audioDurationArray = [];
            currentAudioIndex = 0;
        }
    }

    function toggleRecord() {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
        isRecording = !isRecording;
    }
    onMount(() => {
        styleGlobal = document.createElement("style")
        document.getElementById(".audio-recorder").appendChild(styleGlobal);
        document.getElementById("kbr-ar-slider").addEventListener("input", (e) => {
            styleGlobal.innerHTML = "@scope (.kbr-ar-sound-container) {:scope{input[type=\"range\"]::-webkit-slider-runnable-track " +
                `{background: linear-gradient(to right, #ff9800 0%, #ff9800 ${e.target.value / timeTotal * 100}%, #fff ${e.target.value / timeTotal * 100}%, #fff 100%)}}}`;
        });
    })

</script>

<div id=".audio-recorder"
     class="kbr-ar-grid-container"
     style="
        --background-color: {backgroundColor};
        --record-color: {recordColor};
        --item-color: {itemColor};
        --text-color: {textColor};
     "
>
    <span class="kbr-ar-grid-record">
        <button class="kbr-ar-record-button" on:mousedown={toggleRecord}>
            <label>{isRecording ? "Stop" : "Record"}</label>
        </button>
    </span>
    <span class="kbr-ar-grid-playback">
        <button class="kbr-ar-play-button" on:mousedown={playAudio}>
            <label>
                {isPlaying ? "Stop" : "Play"}
            </label>
        </button>
        <button class="kbr-ar-delete-button" on:mousedown={deleteRecording}>
            <label>
                {"Delete"}
            </label>
        </button>
        <div class="kbr-ar-sound-container">
            <svg style={isRecording ? "display: block;" : "display: none;"}
                 id=".kbr-ar-svg"
                 class="kbr-ar-svg"
                 viewBox="0 0 128 32"
                 width="100%"
                 height="100%"
            >
                <path />
                <path />
                <path />
                <path />
                <path />
                <path />
                <path />
                <path />
            </svg>
            <input
                    style={isRecording ? "display: none;" : "display: block;"}
                    class="kbr-ar-slider"
                    id="kbr-ar-slider"
                    type="range"
                    value={currentTimeGlobal}
                    max={roundWithDecimals(timeTotal, 2)}
                    step="0.01"
                    on:mousedown={stopAudio}
                    on:mouseup={e => movePlayhead(e)}
            />
        </div>
        <div class="kbr-ar-time">
            {
                new Date(roundWithDecimals(currentTimeGlobal, 0)*1000).toISOString().substring(14, 19)
                + " / " +
                new Date(roundWithDecimals(timeTotal, 0)*1000).toISOString().substring(14, 19)
            }
        </div>
    </span>
<!--    <div class="kbr-ar-text" style="position: absolute">-->
<!--        <p>{"Global: " + roundWithDecimals(currentTimeGlobal, 1) + ". Current index: " + currentAudioIndex}</p>-->
<!--        <p>{"array: " + audioDurationArray + " - Total: " + roundWithDecimals(timeTotal, 2)}</p>-->
<!--    </div>-->
</div>

<style lang="scss">
    //Input range

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: 0;
      background: transparent;
      height: 100%;
      //box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    }

    input[type="range"]::-webkit-slider-runnable-track {
      height: 25%;
      border-radius: 1em;
      background: white;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: -3%; /* Centers thumb on the track */
      background-color: var(--text-color);
      border-radius: 50%;
      height: 200%;
      width: 12.5%;
    }


    //Input range end

    button {
        position: relative;
        //min-height: 32px;
        //min-width: 32px;
        //border: 12.5% solid var(--item-color);
        border-color: var(--item-color);
        border-radius: 50%;
        background-color: var(--item-color);
        color: var(--text-color);
    }
    label {
      position: absolute;
      bottom: -1.25em;
      //font-size: 50%;
    }
    .kbr-ar-grid-container {
        aspect-ratio: 2 / 1;
        font-family: inherit;
        display: grid;
        grid-template-rows: repeat(4, minmax(0.5em, 1fr)) auto;
        grid-template-columns: repeat(8, minmax(0.5em, 1fr));
        justify-content: center;
        border-radius: 0.5em;
        background-color: var(--background-color);
        color: var(--text-color);
    }
    .kbr-ar-grid-record {
        grid-row: 1 / span 2;
        grid-column: 4 / span 2;
        width: 100%;
        height: 100%;
    }
    .kbr-ar-record-button {
        display: flex;
        justify-content: center;
        width: 80%;
        height: 80%;
        margin: 10%;
        background-color: var(--record-color);
        // consider a more complex solution to simulate
        // percentage sizing of outline/border, as it is
        // not natively supported
        // ref: https://stackoverflow.com/questions/13474754/how-to-set-borders-thickness-in-percentages
        //outline: 1em solid white;
        //outline-offset: -1em;
    }
    .kbr-ar-grid-playback {
        grid-row: 3 / span 2;
        grid-column: 1 / span 8;
        display: grid;
        grid-template-rows: repeat(2, minmax(0.5em, 1fr));
        grid-template-columns: repeat(16, minmax(0.25em, 1fr));
    }
    .kbr-ar-play-button {
        grid-row: 1;
        grid-column: 2 / span 2;
        display: flex;
        justify-content: center;
    }
    .kbr-ar-delete-button {
        grid-row: 1;
        grid-column: 14 / span 2;
        display: flex;
        justify-content: center;
    }
    .kbr-ar-sound-container {
        grid-row: 1;
        grid-column: 5 / span 8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-time {
        grid-row: 2;
        grid-column: 6 / span 6;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
    }
    .kbr-ar-slider {
      width: 100%;
    }

    .kbr-ar-svg {
        width: 100%;
        fill: var(--record-color);
    }
    .kbr-ar-text {
        grid-row: 1;
        grid-column: 1 / span 3;
    }
</style>