# Kobber AudioRecorder

An audio recorder and playback interface that lets you do
multiple recordings and bounce them down to a single mp3.

## Basic Setup

Install via npm

    npm i @gyldendal/kobber-audio-recorder

Examples of ways to mount the component:

Straight into the html, mounting the component
to a target in the DOM.

    <script type="module" src="@gyldendal/kobber-audio-recorder"></script>
    <script type="module">
        import AudioRecorder from "@gyldendal/kobber-audio-recorder";
        const recorder = new AudioRecorder({
            target: document.getElementById("from-index"),
        });
    </script>
    <div id="from-index"></div>

As a class constructor, here shown in the context of Svelte.

    <script>
        import { onMount } from "svelte";
        import AudioRecorder from "@gyldendal/kobber-audio-recorder";
    
        onMount(() => {
            const target = document.getElementById("in-svelte");
                if (target) {
                    new AudioRecorder({ target: target });
                }
        });
    </script>

    <div id="in-svelte"></div>
    
As a customElement

    import AudioRecorder from "@gyldendal/kobber-audio-recorder";   

    <kobber-audio-recorder id=""></kobber-audio-recorder>


## Properties

### mp3Callback

A callback function passed to the component, called
with a mp3 blob as argument when the recording is updated.

