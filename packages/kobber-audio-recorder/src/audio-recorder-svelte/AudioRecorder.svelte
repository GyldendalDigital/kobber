<svelte:options customElement={{tag: "kobber-audio-recorder", shadow: "none"}}/>
<script>
    /*
    NOTES:
        - Calculating total time before playing through is a bit wonky...
        It seems like the browser because of security does not want to give exact
        timings, which gives a weird result when timing the recording (off by fluctuating values).
        -
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

    // Using window.performance.now(), but could also use date.getTime().
    let audioStartTime = null;
    let audioEndTime = null;

    $: if (audioData !== undefined && audioArray.length === 0) {
        // New audio needs events!

        recData.push([audioData]);
        const newAudio = new Audio();
        newAudio.preload = "metadata";
        newAudio.src = window.URL.createObjectURL(recData[recData.length - 1][0]);
        console.log(newAudio.duration);
        audioArray.push(newAudio);
        audioData.arrayBuffer().then((arrayBuffer) => {
            audioCtx = new AudioContext();
            audioCtx.decodeAudioData(arrayBuffer).then((buffer) => {
                console.log(buffer);
                audioDurationArray.push(roundWithDecimals(buffer.duration, 2));
                console.log(audioDurationArray);
                timeTotal = roundWithDecimals(buffer.duration, 2);
            });
        })
    }

    // Unsure about how to update the timeTotal correctly...
    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;

    function roundWithDecimals(num, decimals){
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
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
        audioArray.push(newAudio);

        audioArray[audioArray.length - 1].addEventListener("ended", onAudioEnd);
        audioArray[audioArray.length - 1].addEventListener("timeupdate", (event) => {
            currentTimeGlobal = elapsedTime + event.target.currentTime;
        });
        audioArray[audioArray.length - 1].addEventListener("durationchange", (event) => {
            if (event.target.duration === Infinity) {
                audioDurationArray[audioArray.length - 1] = (audioEndTime - audioStartTime) / 1000;
            }
            if (Number(event.target.duration) && event.target.duration !== Infinity) {
                audioDurationArray[audioArray.length - 1] = event.target.duration;
            }
        });

        console.log(audioArray);
    }

    // drawing the visual feedback of voice used when recording
    function draw() {
        animationId = window.requestAnimationFrame(draw);
        const container = document.getElementById(".visualizer-container");

        if (container.childNodes.length === 0) {
            const canvas = document.createElement("canvas");
            canvas.height = 128;
            canvas.width = 128;
            canvas.id = ".visualizer";
            container.appendChild(canvas);
        }
        //@ts-ignore
        const canvasCtx = container.lastChild.getContext("2d");
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
                    draw();
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
            const visualizerContainer = document.getElementById(".visualizer-container");
            visualizerContainer.removeChild(visualizerContainer.lastChild);
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

<div id=".audio-recorder">
    <button on:mousedown={toggleRecord}>{isRecording ? "Stop" : "Record"}</button>
    <button on:mousedown={playAudio}>{isPlaying ? "Stop!" : "Play!"}</button>
    <button on:mousedown={deleteRecording}>{"Delete"}</button>
    <p>{"Global: " + roundWithDecimals(currentTimeGlobal, 1) + ". Current index: " + currentAudioIndex}</p>
    <input
            type="range"
            value={currentTimeGlobal}
            max={roundWithDecimals(timeTotal, 2)}
            step="0.01"
            on:mousedown={stopAudio}
            on:mouseup={e => movePlayhead(e)}
    />
    <p>{"array: " + audioDurationArray + " - Total: " + roundWithDecimals(timeTotal, 2)}</p>
    <div id=".visualizer-container"></div>
</div>