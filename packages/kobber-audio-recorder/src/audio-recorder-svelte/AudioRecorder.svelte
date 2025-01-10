<svelte:options customElement={{tag: "kobber-audio-recorder", shadow: "none"}}/>
<script>
    import {onMount} from "svelte";

    export let theme = "light";
    export let lang = "nb";
    const uniqueId = Math.floor(Math.random() * 10000000).toString();

    const translations = {
        en: {
            play: "Play",
            stop: "Stop",
            pause: "Pause",
            record: "Record",
            recordMore: "Record more",
            delete: "Delete",
            deletePrompt: "Delete the recording?",
            yes: "Yes",
            no: "No",
            of: "of"

        },
        nb: {
            play: "Spill av",
            stop: "Stopp",
            pause: "Pause",
            record: "Ta opp",
            recordMore: "Ta opp mer",
            delete: "Slett",
            deletePrompt: "Vil du slette opptaket?",
            yes: "Ja",
            no: "Nei",
            of: "av"
        },
        nn: {
            play: "Spel av",
            stop: "Stopp",
            pause: "Pause",
            record: "Ta opp",
            recordMore: "Ta opp meir",
            delete: "Slett",
            deletePrompt: "Vil du slette opptaket?",
            yes: "Ja",
            no: "Nei",
            of: "av"
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
        - Should the component have a breaking limit in terms of size?
        And in relation to this, should there be some sort of font-size scaling?
     KNOWN BUGS:
        - When loading an empty blob, you wil be served with the expanded player.
        This is not ideal, but have had issues with getting the right checks in
        order for it work on iPadOS. Take a look at it when time is available.
     */

    import { audioBufferToWav, serializeBlobs, deserializeBlob } from "./AudioHelpers.js";

    export let mp3Callback;
    export let audioData;
    export let isRecordingCallback;

    let isRecording = false;
    let audioDataIndex = 0;
    let mediaRecorder = null;
    let analyser = null;
    let audioCtx = null;
    let animationId = null;
    let isPlaying = false;
    let confirmDelete = false;

    let decodedAudioData = [];
    let recData = [];
    let audioArray = [];
    let currentTimeGlobal = 0;
    let elapsedTime = 0;
    let audioDurationArray = [];
    let currentAudioIndex = 0;
    let currentTimePercentage = "0%";
    let recordedSeconds = 0;
    $: isExpanded = recData.length > 0 || audioArray.length > 0 || isRecording || audioData;

    function roundWithDecimals(num, decimals){
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    // Adds events for audio elements for them to handle playback
    function audioEventSetter(audio, src, index) {
        audio.addEventListener("ended", onAudioEnd);
        audio.addEventListener("timeupdate", (event) => updateCurrentTime(event.target.currentTime));
        audio.addEventListener("durationchange", (event) => {
            if (event.target.duration === Infinity) {
                src.arrayBuffer().then((arrayBuffer) => {
                    audioCtx = new AudioContext();
                    audioCtx.decodeAudioData(arrayBuffer).then((buffer) => {
                        audioDurationArray[index] = buffer.duration;
                    });
                });
            } else if (Number(event.target.duration) && audioDurationArray[index] === undefined) {
                audioDurationArray[index] = Number(event.target.duration);
            }
        });
    }

    $: if (audioData && audioArray.length === 0) {
        deserializeBlob(audioData).then((blobs) => {
            blobs.map((audio, index) => {
                audioDataIndex = blobs.length;
                const newAudio = new Audio();
                newAudio.preload = "metadata";
                newAudio.src = window.URL.createObjectURL(audio);
                audioEventSetter(newAudio, audio, index);
                if (newAudio.duration === Infinity || isNaN(newAudio.duration)) {
                    audio.arrayBuffer().then((arrayBuffer) => {
                        audioCtx = new AudioContext();
                        audioCtx.decodeAudioData(arrayBuffer).then((buffer) => {
                            audioDurationArray[index] = buffer.duration;
                        }).catch((r) => {
                            throw new Error(`couldn't decode mimetype: ${audio.type}, ${r}`);
                        });
                    });
                }
                audioArray.push(newAudio);
                decodedAudioData.push(audio);
            })
        })
    }

    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;

    // Takes the raw recorded data, creates a new buffer for them,
    // decodes that new buffer, converts to wav, converts to mp3,
    // and finally calls the callback with that mp3.
    function encodeToMP3() {
        recData[recData.length - 1][0].arrayBuffer().then((response) => {
            audioCtx = new AudioContext();
            audioCtx.decodeAudioData(response).then((audioBuffer) => {
                decodedAudioData.push(audioBufferToWav(audioBuffer));
                serializeBlobs(decodedAudioData).then((blobs) => mp3Callback && mp3Callback(blobs));
            });
        })
    }

    function edgeHandler(isEnded) {
        if (isEnded) {
            currentTimeGlobal = timeTotal;
            currentTimePercentage = "100%";
            currentAudioIndex = audioDurationArray.length - 1;
        } else {
            currentTimeGlobal = 0;
            currentTimePercentage = "0%";
            currentAudioIndex = 0;
            elapsedTime = 0;
        }
    }

    function playAudio() {
        if (isPlaying) {
            isPlaying = false;
            audioArray[currentAudioIndex].pause();
        } else {
            isPlaying = true;
            if (audioArray.length > 0) {
                if (currentTimeGlobal === timeTotal) {
                    edgeHandler(false);
                }
                audioArray[currentAudioIndex].play();
            }
        }
    }

    function stopAudio() {
        audioArray[currentAudioIndex].pause();
        isPlaying = false;
    }

    function updateCurrentTime(time) {
        currentTimeGlobal = elapsedTime + time;
        currentTimePercentage = currentTimeGlobal / timeTotal * 100 + "%";
    }
    // Connected to an audio elements onended event
    function onAudioEnd() {
        if (currentAudioIndex < audioArray.length - 1) {
            currentAudioIndex++;
            elapsedTime = currentTimeGlobal;
            audioArray[currentAudioIndex].currentTime = 0;
            audioArray[currentAudioIndex].play();
        } else {
            edgeHandler(true);
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
                if (event.shiftKey) {
                    currentTimeGlobal = 0;
                } else {
                    currentTimeGlobal = currentTimeGlobal > 1 ? currentTimeGlobal -1 : 0;
                }
            } else if (event.key === "ArrowRight") {
                if (event.shiftKey) {
                    currentTimeGlobal = timeTotal;
                } else {
                    currentTimeGlobal = currentTimeGlobal + 1 > timeTotal ? timeTotal : currentTimeGlobal + 1;
                }
            }
            currentTimePercentage = currentTimeGlobal / timeTotal + "%";
            currentAudioIndex = findAudioIndex(currentTimeGlobal, 0, audioDurationArray, 0);
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
        audioEventSetter(newAudio, recData[recData.length - 1][0], audioArray.length);
        audioArray.push(newAudio);
        edgeHandler(false);
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
        let nodes = document.getElementById(".kbr-ar-svg-" + uniqueId)?.children;
        if((nodes.length > 0)) {
            for (let i = 0; i < nodes.length; i++) {
                let adjustment = 0;
                const baseValue = 128 / nodes.length;
                const tinyValue = baseValue / 8;

                if (i >= nodes.length / 2) {
                    let reverse = (nodes.length - 1) - i
                    adjustment = 1/6 * (nodes.length/2 - reverse)
                } else {
                    adjustment = 1/6 * (nodes.length/2 - i);
                }
                nodes[i].setAttribute("d", `
                    M ${(i * baseValue) + tinyValue} 16
                    v ${volume / 2 * adjustment}
                    a ${tinyValue},${tinyValue} ${tinyValue / 2} 0 0 ${tinyValue},${tinyValue}
                    h ${baseValue / 2}
                    a ${tinyValue},${tinyValue} ${tinyValue / 2} 0 0 ${tinyValue},-${tinyValue}
                    v -${volume * adjustment}
                    a ${tinyValue},${tinyValue} ${tinyValue / 2} 0 0 -${tinyValue},-${tinyValue}
                    h -${baseValue / 2}
                    a ${tinyValue},${tinyValue} ${tinyValue / 2} 0 0 -${tinyValue},${tinyValue}
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
            encodeToMP3();
        };

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
            audioDataIndex = 0;
            timeTotal = 0;
            audioData = null;
            decodedAudioData = [];
            mp3Callback(new Blob());
            confirmDelete = false;
        }
    }

    function toggleRecord() {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
        isRecording = !isRecording;
        isRecordingCallback(isRecording);
    }

    $: currentWidth = document.getElementById(".audio-recorder-" + uniqueId)?.getBoundingClientRect().width;

    onMount(() => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0].contentBoxSize[0]?.inlineSize) {
                entries[0].target.style.fontSize = entries[0].contentBoxSize[0].inlineSize / 20 / 16 + "em";
            } else {
                entries[0].target.style.fontSize =
                    document.getElementById(".audio-recorder-" + uniqueId)?.getBoundingClientRect().width / 20 / 16 + "em";
            }
        });
        observer.observe(document.getElementById(".audio-recorder-" + uniqueId));
    });

</script>

<div id={".audio-recorder-" + uniqueId}
     class={"kbr-ar-grid-container"}
     style="
        --background-color: {backgroundColor};
        --record-color: {recordColor};
        --item-primary-color: {itemPrimaryColor};
        --item-secondary-color: {itemSecondaryColor};
        --text-color: {textColor};
        --current-time-percentage: {currentTimePercentage};
        --current-width: {currentWidth};
        --rows: {isExpanded ? 20 : 10};
        --percentage-adjustment: {isExpanded ? `8` : `16`}%;
     "
>
    <span class="kbr-ar-aspect" />
    <span class="kbr-ar-grid-record"
          style={confirmDelete ? "display: none;" : ""}
    >
        <button class="kbr-ar-record-button"
                id={"record-button-" + uniqueId}
                on:click={toggleRecord}
                disabled={isPlaying}
        >
            {#if isRecording}
                <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 16 26" fill="none">
                    <path d="M2 2L2 24" stroke={recordIconColor} stroke-width="4" stroke-linecap="round"/>
                    <path d="M14 2L14 24" stroke={recordIconColor} stroke-width="4" stroke-linecap="round"/>
                </svg>
            {:else}
                {#if timeTotal !== 0 || recData.length > 0}
                    <svg width="60%" height="60%" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 19.25C6.682 19.25 5 17.568 5 15.5V5.75C5 3.682 6.682 2 8.75 2H11.75C13.818 2 15.5 3.682 15.5 5.75V15.5C15.5 17.568 13.818 19.25 11.75 19.25H8.75ZM8.75 3.5C7.509 3.5 6.5 4.509 6.5 5.75V15.5C6.5 16.741 7.509 17.75 8.75 17.75H11.75C12.991 17.75 14 16.741 14 15.5V5.75C14 4.509 12.991 3.5 11.75 3.5H8.75Z" fill={recordIconColor}/>
                        <path d="M10.25 26C9.836 26 9.5 25.664 9.5 25.25V22.216C5.266 21.835 2 18.293 2 14V11.75C2 11.336 2.336 11 2.75 11C3.164 11 3.5 11.336 3.5 11.75V14C3.5 17.722 6.528 20.75 10.25 20.75C13.972 20.75 17 17.722 17 14V11.75C17 11.336 17.336 11 17.75 11C18.164 11 18.5 11.336 18.5 11.75V14C18.5 18.293 15.234 21.835 11 22.216V25.25C11 25.664 10.664 26 10.25 26Z" fill={recordIconColor}/>
                        <path d="M14.25 25.5H21.25M17.75 22V29" stroke={recordIconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 24 24" fill="none">
                        <path d="M10.5 17.25C8.432 17.25 6.75 15.568 6.75 13.5V3.75C6.75 1.682 8.432 0 10.5 0H13.5C15.568 0 17.25 1.682 17.25 3.75V13.5C17.25 15.568 15.568 17.25 13.5 17.25H10.5ZM10.5 1.5C9.259 1.5 8.25 2.509 8.25 3.75V13.5C8.25 14.741 9.259 15.75 10.5 15.75H13.5C14.741 15.75 15.75 14.741 15.75 13.5V3.75C15.75 2.509 14.741 1.5 13.5 1.5H10.5Z" fill={recordIconColor}/>
                        <path d="M12 24C11.586 24 11.25 23.664 11.25 23.25V20.216C7.016 19.835 3.75 16.293 3.75 12V9.75C3.75 9.336 4.086 9 4.5 9C4.914 9 5.25 9.336 5.25 9.75V12C5.25 15.722 8.278 18.75 12 18.75C15.722 18.75 18.75 15.722 18.75 12V9.75C18.75 9.336 19.086 9 19.5 9C19.914 9 20.25 9.336 20.25 9.75V12C20.25 16.293 16.984 19.835 12.75 20.216V23.25C12.75 23.664 12.414 24 12 24Z" fill={recordIconColor}/>
                    </svg>
                {/if}
            {/if}
            <label for={"record-button-" + uniqueId}>
                {
                isRecording
                    ? translations[lang].pause
                    : timeTotal !== 0 || recData.length > 0
                        ? translations[lang].recordMore
                        : translations[lang].record
                }
            </label>
        </button>
    </span>
    {#if isExpanded}
    <button class="kbr-ar-play-button"
            id={"play-button-" + uniqueId}
            on:click={playAudio}
            style={confirmDelete || isRecording ? "display: none;" : ""}
    >
        {#if isPlaying}
            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 16 26" fill="none">
                <path d="M2 2L2 24" stroke={textColor} stroke-width="4" stroke-linecap="round"/>
                <path d="M14 2L14 24" stroke={textColor} stroke-width="4" stroke-linecap="round"/>
            </svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="-3 0 20 18" fill={textColor}>
                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"/>
            </svg>
        {/if}
        <label for={"play-button-" + uniqueId}>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            {isPlaying ? translations[lang].stop : translations[lang].play}
        </label>
    </button>
    <div class="kbr-ar-slider-container"
         style={confirmDelete ? "display: none;" : ""}
    >
        <input
                style={isRecording ? "display: none;" : "display: block;"}
                class="kbr-ar-slider"
                id={"kbr-ar-slider-" + uniqueId}
                type="range"
                value={currentTimeGlobal}
                max={timeTotal}
                step="0.01"
                on:mousedown={stopAudio}
                on:touchstart={stopAudio}
                on:mouseup={e => movePlayhead(e)}
                on:touchend={e => movePlayhead(e)}
                on:keydown={e => movePlayhead(e, true)}
                on:input={e => currentTimePercentage = e.target.value / timeTotal * 100 + "%"}
                disabled={timeTotal === 0}
                aria-label={currentTimeGlobal.toString()}
        />
    </div>
    <div class="kbr-feedback-container" style={isRecording ? "display: block;" : "display: none;"}>
        <svg
             id={".kbr-ar-svg-" + uniqueId}
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
            <path />
            <path />
            <path />
            <path />
            <path />
            <path />
            <path />
            <path />
        </svg>
    </div>
        <span class="kbr-ar-time"
              style={confirmDelete ? "display: none;" : "" }
              aria-label={
              isRecording
              ? new Date(recordedSeconds * 1000).toISOString().substring(14, 19)
              : (
                new Date(roundWithDecimals(currentTimeGlobal, 0)*1000).toISOString().substring(14, 19)
                + " " + translations[lang].of + " " +
                new Date(roundWithDecimals(timeTotal, 0)*1000).toISOString().substring(14, 19)
                )
              }
        >
        {#if isRecording}
            <span style={`color: ${recordColor};`}>
                {new Date(recordedSeconds * 1000).toISOString().substring(14, 19)}
            </span>
        {:else}
            {
                new Date(roundWithDecimals(currentTimeGlobal, 0)*1000).toISOString().substring(14, 19)
                + " / " +
                new Date(roundWithDecimals(timeTotal, 0)*1000).toISOString().substring(14, 19)
            }
        {/if}
    </span>
    <button class="kbr-ar-delete-button"
            id={"delete-button-" + uniqueId}
            on:click={() => confirmDelete = !confirmDelete}
            style={confirmDelete || isRecording ? "display: none;" : ""}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_710_817)">
                <path d="M1.25 3.75H18.75M8.125 14.375V8.125M11.875 14.375V8.125M11.875 1.25H8.125C7.79348 1.25 7.47554 1.3817 7.24112 1.61612C7.0067 1.85054 6.875 2.16848 6.875 2.5V3.75H13.125V2.5C13.125 2.16848 12.9933 1.85054 12.7589 1.61612C12.5245 1.3817 12.2065 1.25 11.875 1.25ZM15.7208 17.6033C15.6949 17.9159 15.5524 18.2073 15.3216 18.4197C15.0909 18.6321 14.7887 18.75 14.475 18.75H5.52583C5.21218 18.75 4.90998 18.6321 4.6792 18.4197C4.44842 18.2073 4.30593 17.9159 4.28 17.6033L3.125 3.75H16.875L15.7208 17.6033Z" stroke={textColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_710_817">
                    <rect width="100%" height="100%" fill={itemPrimaryColor}/>
                </clipPath>
            </defs>
        </svg>
        <label for={"delete-button-" + uniqueId}>
            {translations[lang].delete}
        </label>
    </button>
    <span class="kbr-ar-confirm-delete-text"
          style={confirmDelete ? "" : "display: none;"}
    >
        {translations[lang].deletePrompt}
    </span>
    <button class="kbr-ar-confirm-delete-yes"
            style={confirmDelete ? "" : "display: none;"}
            on:click={deleteRecording}
    >
        {translations[lang].yes}
    </button>
    <button class="kbr-ar-confirm-delete-no"
            style={confirmDelete ? "" : "display: none;"}
            on:click={() => confirmDelete = !confirmDelete}
    >
        {translations[lang].no}
    </button>
    {/if}
</div>

<style lang="scss">
    .kbr-ar-grid-container {
        font-family: inherit;
        display: grid;
        width: 100%;
        height: 100%;
        min-width: 128px;
        grid-template-columns: repeat(32, 1fr);
        grid-template-rows: repeat(var(--rows), 1fr);
        border-radius: 5% / var(--percentage-adjustment);
        background-color: var(--background-color);
        color: var(--text-color);
    }
    .kbr-ar-aspect {
      padding: 50%;
      grid-row: 1;
      grid-column: 1;
    }
    .kbr-ar-grid-record {
        grid-row: 2 / span 6;
        grid-column: 14 / span 6;
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
        outline: var(--item-primary-color) solid 0.25em;
        outline-offset: -0.2em;
    }
    .kbr-ar-play-button {
        grid-row: 12 / span 5;
        grid-column: 3 / span 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-delete-button {
        grid-row: 12 / span 5;
        grid-column: 26 / span 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-ar-slider-container {
        grid-row: 12 / span 5;
        grid-column: 9 / span 16;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .kbr-feedback-container {
      grid-row: 11 / span 8;
      grid-column: 2 / span 30;
      width: 100%;
      height: 100%;
    }
    .kbr-ar-time {
        grid-row: 17 / span 3;
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
    }

    .kbr-ar-confirm-delete-text {
      grid-row: 7 / span 3;
      grid-column: 2 / span 30;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      font-size: 1.2em;
    }

    .kbr-ar-confirm-delete-yes {
      grid-row: 12 / span 5;
      grid-column: 6 / span 10;
      border-radius: 25% / 50%;
      font-size: 1.2em;
    }

    .kbr-ar-confirm-delete-no {
      grid-row: 12 / span 5;
      grid-column: 18 / span 10;
      border-radius: 25% / 50%;
      font-size: 1.2em;
    }

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: 0;
      background: transparent;
      height: 80%;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      height: 25%;
      border-radius: 1em;
      transition: background 5ms;
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
    input[type="range"]:enabled::-webkit-slider-thumb:hover {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.1, 1.1);
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
    input[type="range"]:enabled::-moz-range-thumb:hover {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.1, 1.1);
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
      font-size: inherit;
    }
    button:hover:enabled {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1.0375, 1.0375);
    }
    button:active:enabled {
      transition: transform 100ms, box-shadow 100ms;
      transform: scale(1, 1);
    }
    button:disabled {
      transition: opacity 100ms, box-shadow 100ms;
      box-shadow: none;
      opacity: 0.7;
    }
    button:focus-visible {
      outline: var(--item-secondary-color) solid 0.25em;
      outline-offset: -0.2em;
    }
    label {
      position: absolute;
      bottom: -1.5em;
      white-space: nowrap;
      font-size: inherit;
    }
</style>