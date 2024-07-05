<script>
    let mediaRecorder = null;
    let analyser = null;
    let audioCtx = null;
    let animationId = null;
    let isRecording = false;

    let slider = null;

    let recData = [];
    let audioArray = [];
    let totalDuration = 0;
    let currentTime = 0;
    let elapsedTime = 0;
    let audioDurationArray = [];

    function playRecording() {
        console.log("totalDuration", totalDuration);
        if (audioArray.length > 0) {
            console.log(audioArray[0].duration);
            audioArray[0].play();
        }
    }

    function concatRecordings() {
        console.log(recData);
        let newAudio = new Audio();
        newAudio.preload = "auto";
        newAudio.src = window.URL.createObjectURL(...recData[recData.length - 1]);
        audioArray.push(newAudio);

        console.log("populated audioArray:", audioArray);

        audioArray.forEach((audio, index) => {
            if (audioArray.length - 1 > index) {
                audio.addEventListener("ended", (event) => {
                    console.log(event);
                    elapsedTime += event.target.currentTime;
                    audioArray[index + 1].play();
                });
            }
            audio.addEventListener("timeupdate", (event) => {
                console.log("timeupdate", event.target.currentTime);
                currentTime = elapsedTime + event.target.currentTime;
            });
            audio.addEventListener("durationchange", (event) => {
                console.log("durationchange:", event.target.duration);
                if (Number(event.target.duration) && event.target.duration !== Infinity) {
                    audioDurationArray[index] = event.target.duration;
                    totalDuration += event.target.duration;
                }
            });
        });
        //audioArray[0].play();
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
                    console.log(mediaRecorder.state);

                    draw();

                    mediaRecorder.ondataavailable = (e) => {
                        recData[recData.length - 1].push(e.data);
                        concatRecordings();
                    };
                });
        }
    }

    async function stopRecording() {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);

        mediaRecorder.onstop = (e) => {
            e.srcElement.stream.getTracks()[0].stop();
            window.cancelAnimationFrame(animationId);
            const canvas = document.getElementById(".visualizer");
            const canvasCtx = canvas.getContext("2d");
            canvasCtx.clearRect(0, 0, 1280, 1280);
            console.log("onstop state:", mediaRecorder.state);

            /*
            const container = document.getElementById(".audio-recorder");
            slider = document.createElement("input");
            slider.type = "range";
            slider.max = totalDuration;
            container.appendChild(slider);
             */
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
    <button on:mousedown={playRecording}>Play!</button>
    <p>{"Current time: " + currentTime}</p>
    <p>{"Elapsed time: " + elapsedTime}</p>
    <p>{"array: " + audioDurationArray}</p>
    <canvas id=".visualizer" height="128px" width="128px"></canvas>
</div>