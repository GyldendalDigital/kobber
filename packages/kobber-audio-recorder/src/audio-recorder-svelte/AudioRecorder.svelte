<svelte:options customElement={{tag: "kobber-audio-recorder", shadow: "none"}}/>
<script>
    export let theme = "light";
    export let lang = "nb"

    const translations = {
        en: {
            play: "Play",
            stop: "Stop",
            record: "Record",
            delete: "Delete"
        },
        nb: {
            play: "Spill av",
            stop: "Stopp",
            record: "Ta opp",
            delete: "Slett"

        },
        nn: {
            play: "Spel av",
            stop: "Stopp",
            record: "Ta opp",
            delete: "Slett"
        }
    }

    const designTokens = {
        light: {
            backgroundColor: "#DFE2F1",
            recordColor: "#EF3116",
            recordIconColor: "#fff",
            itemPrimaryColor: "#fff",
            itemSecondaryColor: "#3471a8",
            textColor: "#0F1642"
        },
        dark: {
            backgroundColor: "#0F1642",
            recordColor: "#EF3116",
            recordIconColor: "#0F1642",
            itemPrimaryColor: "#3471a8",
            itemSecondaryColor: "#DFE2F1",
            textColor: "#fff"
        }
    }

    const backgroundColor = designTokens[theme].backgroundColor;
    const recordColor = designTokens[theme].recordColor;
    const recordIconColor = designTokens[theme].recordIconColor;
    const itemPrimaryColor = designTokens[theme].itemPrimaryColor;
    const itemSecondaryColor = designTokens[theme].itemSecondaryColor;
    const textColor = designTokens[theme].textColor;

    /*
    NOTES:
        - Calculating total time before playing through is a bit wonky...
        It seems like the browser because of security does not want to give exact
        timings, which gives a weird result when timing the recording (off by fluctuating values).
        - Should the component have a breaking limit in terms of size?
        And in relation to this, should there be some sort of font-size scaling?
     KNOWN BUGS:
        - Sometimes an audio resets playback from 0 (inconsistent).
        Maybe write a check in playAudio() to re-set the value based on currentTimeGlobal.
        - durationChange sometimes runs wild (inconsistent).
        Usually you don't need to re-update the durationchange, so look into analyzing
        the initial with arraybuffer, so the check for previous duration becomes cleaner.
        - After recording, the progress of the range input is not updated with the new total.
     */

    import { audioBufferToWav, } from "./AudioHelpers.js";

    export let mp3Callback;
    export let audioData;

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
    let currentTimePercentage = "0%";
    let recordedSeconds = 0;

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

    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;

    // Takes the raw recorded data, creates a new buffer for them,
    // decodes that new buffer, converts to wav, converts to mp3,
    // and finally calls the callback with that mp3.
    function encodeToMP3() {
        Promise.all(recData.map((data) => {return data[0].arrayBuffer()})).then((response) => {
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

    function movePlayhead(event, keyboard) {
        if (keyboard) {
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
    }

    function drawSVG() {
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

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

    function countRecordingTime() {
        isRecording && setTimeout(() => {
            recordedSeconds += 1;
            countRecordingTime();
        }, 1000);
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
                    recordedSeconds = roundWithDecimals(timeTotal, 0);
                    countRecordingTime();
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
            currentTimePercentage = "0%";
            timeTotal = 0;
            audioData = undefined;
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
    <span class="kbr-ar-aspect" />
    <span class="kbr-ar-grid-record">
        <button class="kbr-ar-record-button"
                on:mousedown={toggleRecord}
                disabled={isPlaying}
        >
            {#if isRecording}
                <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 16 26" fill="none">
                    <path d="M2 2L2 24" stroke={recordIconColor} stroke-width="4" stroke-linecap="round"/>
                    <path d="M14 2L14 24" stroke={recordIconColor} stroke-width="4" stroke-linecap="round"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" viewBox="0 0 24 24" fill="none">
                    <path d="M10.5 17.25C8.432 17.25 6.75 15.568 6.75 13.5V3.75C6.75 1.682 8.432 0 10.5 0H13.5C15.568 0 17.25 1.682 17.25 3.75V13.5C17.25 15.568 15.568 17.25 13.5 17.25H10.5ZM10.5 1.5C9.259 1.5 8.25 2.509 8.25 3.75V13.5C8.25 14.741 9.259 15.75 10.5 15.75H13.5C14.741 15.75 15.75 14.741 15.75 13.5V3.75C15.75 2.509 14.741 1.5 13.5 1.5H10.5Z" fill={recordIconColor}/>
                    <path d="M12 24C11.586 24 11.25 23.664 11.25 23.25V20.216C7.016 19.835 3.75 16.293 3.75 12V9.75C3.75 9.336 4.086 9 4.5 9C4.914 9 5.25 9.336 5.25 9.75V12C5.25 15.722 8.278 18.75 12 18.75C15.722 18.75 18.75 15.722 18.75 12V9.75C18.75 9.336 19.086 9 19.5 9C19.914 9 20.25 9.336 20.25 9.75V12C20.25 16.293 16.984 19.835 12.75 20.216V23.25C12.75 23.664 12.414 24 12 24Z" fill={recordIconColor}/>
                </svg>
            {/if}
            <label>{isRecording ? translations[lang].stop : translations[lang].record}</label>
        </button>
    </span>
    <button class="kbr-ar-play-button"
            on:mousedown={playAudio}
            disabled={isRecording || timeTotal === 0}
    >
        {#if isPlaying}
            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 16 26" fill="none">
                <path d="M2 2L2 24" stroke={textColor} stroke-width="4" stroke-linecap="round"/>
                <path d="M14 2L14 24" stroke={textColor} stroke-width="4" stroke-linecap="round"/>
            </svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" viewBox="-3 0 20 18" fill={textColor}>
                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"/>
            </svg>
        {/if}
        <label>
            {isPlaying ? translations[lang].stop : translations[lang].play}
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
                step="0.01"
                on:mousedown={stopAudio}
                on:mouseup={e => movePlayhead(e)}
                on:keydown={e => movePlayhead(e, true)}
                on:input={e => currentTimePercentage = e.target.value / timeTotal * 100 + "%"}
                disabled={timeTotal === 0}
        />
    </div>
    <button class="kbr-ar-delete-button"
            on:mousedown={deleteRecording}
            disabled={isRecording || timeTotal === 0}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="75%" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_710_817)">
                <path d="M1.25 3.75H18.75M8.125 14.375V8.125M11.875 14.375V8.125M11.875 1.25H8.125C7.79348 1.25 7.47554 1.3817 7.24112 1.61612C7.0067 1.85054 6.875 2.16848 6.875 2.5V3.75H13.125V2.5C13.125 2.16848 12.9933 1.85054 12.7589 1.61612C12.5245 1.3817 12.2065 1.25 11.875 1.25ZM15.7208 17.6033C15.6949 17.9159 15.5524 18.2073 15.3216 18.4197C15.0909 18.6321 14.7887 18.75 14.475 18.75H5.52583C5.21218 18.75 4.90998 18.6321 4.6792 18.4197C4.44842 18.2073 4.30593 17.9159 4.28 17.6033L3.125 3.75H16.875L15.7208 17.6033Z" stroke={textColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_710_817">
                    <rect width="100%" height="100%" fill={itemPrimaryColor}/>
                </clipPath>
            </defs>
        </svg>
        <label>
            {translations[lang].delete}
        </label>
    </button>
    <span class="kbr-ar-time">
        {#if isRecording}
            {new Date(recordedSeconds * 1000).toISOString().substring(14, 19)}
        {:else}
            {
                new Date(roundWithDecimals(currentTimeGlobal, 0)*1000).toISOString().substring(14, 19)
                + " / " +
                new Date(roundWithDecimals(timeTotal, 0)*1000).toISOString().substring(14, 19)
            }
        {/if}
    </span>

<!--<div class="kbr-ar-text" style="position: absolute">-->
<!--    <p>{"Global: " + roundWithDecimals(currentTimeGlobal, 1) + ". Current index: " + currentAudioIndex}</p>-->
<!--    <p>{"array: " + audioDurationArray + " - Total: " + roundWithDecimals(timeTotal, 2)}</p>-->
<!--</div>-->
</div>

<style lang="scss">
    .kbr-ar-grid-container {
        font-family: inherit;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(32, 1fr);
        grid-template-rows: repeat(19, 1fr);
        border-radius: 5% / 10%;
        background-color: var(--background-color);
        color: var(--text-color);
        box-shadow: inset 0 0 1em -0.75em;
    }
    .kbr-ar-aspect {
      padding: 50%;
      grid-row: 1;
      grid-column: 1;
    }
    .kbr-ar-grid-record {
        grid-row: 2 / span 8;
        grid-column: 13 / span 8;
        width: 100%;
        height: 100%;
    }
    .kbr-ar-record-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--record-color);

    }
    .kbr-ar-play-button {
        grid-row: 13 / span 4;
        grid-column: 3 / span 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-delete-button {
        grid-row: 13 / span 4;
        grid-column: 27 / span 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-sound-container {
        grid-row: 13 / span 4;
        grid-column: 9 / span 16;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-time {
        font-size: 80%;
        grid-row: 17 / span 2;
        grid-column: 9 / span 16;
        height: 100%;
        width: 100%;
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
        background-color: var(--item-primary-color);
        box-shadow: inset 0 0.125em 0.25em -0.05em;
        border-radius: 10% / 50%;
    }
    .kbr-ar-text {
        grid-row: 1;
        grid-column: 1 / span 4;
    }

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
      box-shadow: inset 0 0.1em 0.1em -0.1em;
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
      box-shadow: 0 0.125em 0.125em -0.125em rgba(0,0,0,0.5);
    }
    input[type="range"]:enabled::-webkit-slider-thumb:hover {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.1, 1.1);
      box-shadow: 0 0.5em 0.5em -0.5em rgba(0,0,0,0.375);
    }
    input[type="range"]::-moz-range-track {
      height: 25%;
      border-radius: 1em;
      box-shadow: inset 0 0.1em 0.1em -0.1em;
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
      box-shadow: 0 0.125em 0.125em -0.125em rgba(0,0,0,0.5);
    }
    input[type="range"]:enabled::-moz-range-thumb:hover {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.1, 1.1);
      box-shadow: 0 0.5em 0.5em -0.5em rgba(0,0,0,0.375);
    }
    input[type="range"]:focus-visible {
      outline: 0.25em solid var(--item-secondary-color);
    }
    input[type="range"]:disabled {
      opacity: 0.7;
    }
    button {
      position: relative;
      border: none;
      border-radius: 50%;
      background-color: var(--item-primary-color);
      color: var(--text-color);
      padding: 0;
      box-shadow: 0 0.125em 0.125em -0.125em rgba(0,0,0,0.5);
    }
    button:hover:enabled {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.0375, 1.0375);
      box-shadow: 0 0.5em 0.5em -0.5em rgba(0,0,0,0.375);
    }
    button:active:enabled {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1, 1);
      box-shadow: 0 0.125em 0.125em -0.125em rgba(0,0,0,0.5);
    }
    button:disabled {
      transition: opacity 100ms, box-shadow 100ms;
      box-shadow: none;
      opacity: 0.7;
    }
    label {
      position: absolute;
      bottom: -1.25em;
      font-size: 80%;
      white-space: nowrap;
    }
</style>