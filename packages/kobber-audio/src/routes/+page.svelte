<script>
    import AudioRecorder from "$lib/svelte/AudioRecorder.svelte";

    function callbackTest(blob) {
        if (blob) {
            console.log("this is a callback test", blob);
        }
    }
</script>

<h1>Hello Kobber User!</h1>
<p>
    This initial commit is to see that the basic svelte component setup is working.
</p>

<AudioRecorder mp3Callback={callbackTest}/>