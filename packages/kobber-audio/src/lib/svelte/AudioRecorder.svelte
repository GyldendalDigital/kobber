<svelte:options customElement="audio-recorder" />
<script>
    /*
    NOTES:
        - Calculating total time before playing through is a bit wonky...
        It seems like the browser because of security does not want to give exact
        timings, which gives a weird result when timing the recording (off by fluctuating values).
        -
     */

    import {audioBufferToWav} from "./AudioHelpers.js";

    let mediaRecorder = null;
    let analyser = null;
    let audioCtx = null;
    let animationId = null;
    let isRecording = false;
    let isPlaying = false;

    let recData = [];
    const audioArray = [];
    let currentTimeGlobal = 0;
    let elapsedTime = 0;
    let latestDuration = 0;
    let audioDurationArray = [];
    let currentAudioIndex = 0;

    // Using window.performance.now(), but could also use date.getTime().
    let audioStartTime = null;
    let audioEndTime = null;

    // Unsure about how to update the timeTotal correctly...
    $: timeTotal = audioDurationArray[audioDurationArray.length - 1] ? audioDurationArray.reduce((acc, current) => {return acc + current}, 0) : 0;

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
                audioBufferToWav(audioBuffer);
            });
        })
    }

    function roundWithDecimals(num, decimals){
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    function onAudioEnd() {
        if (currentAudioIndex < audioArray.length - 1) {
            currentAudioIndex++;
            elapsedTime = currentTimeGlobal;
            audioArray[currentAudioIndex].currentTime = 0;
            audioArray[currentAudioIndex].play();
        }
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

    function findAudioIndex(timestamp, accumulative, array, index) {
        if (array.length > index) {
            if (timestamp >= accumulative && timestamp <= (accumulative + array[index])) {
                elapsedTime = accumulative;
                audioArray[index].currentTime = timestamp - accumulative;
                console.log("new current time:", audioArray[index].currentTime);
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
        console.log("event", event.target.value);
        currentTimeGlobal = Number(event.target.value);
        currentAudioIndex = findAudioIndex(currentTimeGlobal, 0, audioDurationArray, 0);
        console.log(currentTimeGlobal);
        console.log(currentAudioIndex, audioArray);
    }

    function concatRecordings() {
        const newAudio = new Audio();
        newAudio.preload = "auto";
        newAudio.src = window.URL.createObjectURL(...recData[recData.length - 1]);
        audioArray.push(newAudio);

        console.log(audioArray, recData);

        audioArray[audioArray.length - 1].addEventListener("ended", onAudioEnd);
        audioArray[audioArray.length - 1].addEventListener("timeupdate", (event) => {
            console.log("timeupdate!", currentTimeGlobal);
            currentTimeGlobal = elapsedTime + event.target.currentTime;
        });
        audioArray[audioArray.length - 1].addEventListener("durationchange", (event) => {
            console.log("duarationchange: ", event.target.duration);
            if (event.target.duration === Infinity) {
                audioDurationArray[audioArray.length - 1] = (audioEndTime - audioStartTime) / 1000;
            }
            if (Number(event.target.duration) && event.target.duration !== Infinity) {
                audioDurationArray[audioArray.length - 1] = event.target.duration;
                latestDuration = event.target.duration;
                console.log(latestDuration);
            }
        });

    }

    function draw() {
        animationId = window.requestAnimationFrame(draw);

        const canvas = document.getElementById(".visualizer");
        const canvasCtx = canvas.getContext("2d");
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

                    mediaRecorder.ondataavailable = (e) => {
                        recData[recData.length - 1].push(e.data);
                        concatRecordings();
                    };
                });
        }
    }

    async function stopRecording() {
        audioEndTime = window.performance.now();
        mediaRecorder.stop();
        mediaRecorder.onstop = (e) => {
            e.srcElement.stream.getTracks()[0].stop();
            window.cancelAnimationFrame(animationId);
            const canvas = document.getElementById(".visualizer");
            const canvasCtx = canvas.getContext("2d");
            canvasCtx.clearRect(0, 0, 1280, 1280);
        };
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
    <button on:mousedown={encodeToMP3}>Download</button>
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
    <canvas id=".visualizer" height="128px" width="128px"></canvas>
</div>