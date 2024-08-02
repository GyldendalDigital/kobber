import AudioRecorder from "./audio-recorder-svelte/AudioRecorder.svelte"

new AudioRecorder({
  target: document.getElementById('app'),
})

export default AudioRecorder
