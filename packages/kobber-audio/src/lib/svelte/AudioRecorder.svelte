<script>
    let mediaRecorder = null;
    let analyser = null;
    let audioCtx = null;
    let animationId = null;
    let isRecording = false;

    let recData = [];
    const audioArray = [];
    let currentTime = 0;
    let elapsedTime = 0;
    let latestDuration = 0;
    let audioDurationArray = [];
    let currentAudioIndex = 0;

    // Using window.performance.now(), but could also use date.getTime().
    let audioStartTime = null;
    let audioEndTime = null;

    $: timeTotal = audioDurationArray.reduce((acc, current) => {return acc + current}, 0);

    function roundWithDecimals(num, decimals){
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    function onAudioEnd() {
        if (currentAudioIndex < audioArray.length - 1) {
            currentAudioIndex++;
            elapsedTime = currentTime;
            audioArray[currentAudioIndex].play();
        }
    }

    function playAudio() {
        currentTime = 0;
        elapsedTime = 0;
        currentAudioIndex = 0;
        if (audioArray.length > 0) {
            audioArray[0].play();
        }
    }

    function stopAudio() {
        audioArray[currentAudioIndex].pause();
    }

    function concatRecordings() {
        const newAudio = new Audio();
        newAudio.preload = "auto";
        newAudio.src = window.URL.createObjectURL(...recData[recData.length - 1]);
        audioArray.push(newAudio);

        console.log(audioArray, recData);

        audioArray[audioArray.length - 1].addEventListener("ended", onAudioEnd);
        audioArray[audioArray.length - 1].addEventListener("timeupdate", (event) => {
            currentTime = elapsedTime + event.target.currentTime;
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
    <button on:mousedown={playAudio}>Play!</button>
    <input
            type="range"
            value={roundWithDecimals(currentTime, 2)}
            max={roundWithDecimals(timeTotal, 2)}
            step="0.01"
            on:mousedown={stopAudio}
    />
    <p>{"Current time: " + roundWithDecimals(currentTime, 2)}</p>
    <p>{"array: " + audioDurationArray + " - Total: " + roundWithDecimals(timeTotal, 2)}</p>
    <canvas id=".visualizer" height="128px" width="128px"></canvas>
</div>