<svelte:options customElement={{tag: "kobber-audio-recorder", shadow: "none"}}/>
<script>
    const designTokens = {
        light: {
            backgroundColor: "#DFE2F1",
            recordColor: "#EF3116",
            itemPrimaryColor: "#fff",
            itemSecondaryColor: "#3471a8",
            textColor: "#0F1642"
        },
        dark: {
            backgroundColor: "#0F1642",
            recordColor: "#EF3116",
            itemPrimaryColor: "#3471a8",
            itemSecondaryColor: "#DFE2F1",
            textColor: "#fff"
        }
    }

    const theme = "light";
    const backgroundColor = designTokens[theme].backgroundColor;
    const recordColor = designTokens[theme].recordColor;
    const itemPrimaryColor = designTokens[theme].itemPrimaryColor;
    const itemSecondaryColor = designTokens[theme].itemSecondaryColor;
    const textColor = designTokens[theme].textColor;

    /*
    NOTES:
        - Calculating total time before playing through is a bit wonky...
        It seems like the browser because of security does not want to give exact
        timings, which gives a weird result when timing the recording (off by fluctuating values).
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

    let currentTimePercentage = 0;

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
            currentTimePercentage = currentTimeGlobal / timeTotal * 100 + "%";
        });
        audio.addEventListener("durationchange", (event) => {
            // Consider swapping the code below with a variation of this:
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


            if (event.target.duration === Infinity) {
                audioDurationArray[index] = (audioEndTime - audioStartTime) / 1000;
            } else if (Number(event.target.duration) && audioDurationArray[index] === undefined) {
                audioDurationArray[index] = Number(event.target.duration);
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

    // Unsure about how to update the timeTotal correctly...
    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;
    $: if (timeTotal) {
        console.log("timeTotal changed. timeTotal:", timeTotal, "audioDurationArray", audioDurationArray)
    }
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
                console.log("end of findAudioIndex", audioArray[index].currentTime);
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

    function movePlayhead(event, keyboard) {
        if (keyboard) {
            console.log(event.key);
            if (event.key === "ArrowLeft") {
                currentTimeGlobal = currentTimeGlobal > 1 ? currentTimeGlobal -1 : 0;
            } else if (event.key === "ArrowRight") {
                currentTimeGlobal = currentTimeGlobal + 1 > timeTotal ? timeTotal : currentTimeGlobal + 1;
            }
        } else {
            currentTimeGlobal = Number(event.target.value);
            currentAudioIndex = findAudioIndex(currentTimeGlobal, 0, audioDurationArray, 0);
        }
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

</script>

<div id=".audio-recorder"
     class="kbr-ar-grid-container"
     style="
        --background-color: {backgroundColor};
        --record-color: {recordColor};
        --item-primary-color: {itemPrimaryColor};
        --item-secondary-color: {itemSecondaryColor};
        --text-color: {textColor};
        --current-time-percentage: {currentTimePercentage};
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
                    max={timeTotal}
                    step="0.1"
                    on:mousedown={stopAudio}
                    on:mouseup={e => movePlayhead(e)}
                    on:keydown={e => movePlayhead(e, true)}
                    on:input={e => currentTimePercentage = e.target.value / timeTotal * 100 + "%"}
            />
        </div>
        <button class="kbr-ar-delete-button" on:mousedown={deleteRecording}>
            <label>
                {"Delete"}
            </label>
        </button>
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

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: 0;
      background: transparent;
      height: 100%;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      height: 25%;
      border-radius: 1em;
      background: linear-gradient(
                      to right,
                      var(--item-secondary-color) 0%,
                      var(--item-secondary-color) var(--current-time-percentage),
                      var(--item-primary-color) var(--current-time-percentage),
                      var(--item-primary-color) 100%);
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      margin-top: -3%;
      background-color: var(--text-color);
      border-radius: 50%;
      height: 200%;
      width: 12.5%;
    }

    input[type="range"]::-moz-range-track {
      height: 25%;
      border-radius: 1em;
      background: linear-gradient(
                      to right,
                      var(--item-secondary-color) 0%,
                      var(--item-secondary-color) var(--current-time-percentage),
                      var(--item-primary-color) var(--current-time-percentage),
                      var(--item-primary-color) 100%);
    }

    input[type="range"]::-moz-range-thumb {
      border: none;
      background-color: var(--text-color);
      border-radius: 50%;
      height: 50%;
      width: 12.5%;
    }
    input[type="range"]:focus {
      outline: 0.25em solid var(--item-secondary-color);
    }

    button {
        position: relative;
        border-color: var(--item-secondary-color);
        border-radius: 50%;
        background-color: var(--item-primary-color);
        color: var(--text-color);
    }
    label {
      position: absolute;
      bottom: -1.25em;
    }
    .kbr-ar-grid-container {
        aspect-ratio: 2 / 1;
        font-family: inherit;
        display: grid;
        grid-template-rows: repeat(4, minmax(0.5em, 1fr)) auto;
        grid-template-columns: repeat(8, minmax(0.5em, 1fr));
        justify-content: center;
        border-radius: 5% / 10%;
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