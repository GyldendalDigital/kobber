<script lang="ts">
    import Paper from "../../paper/paper.svelte";
    console.log("svelte card");

    let props = $props();
    let { children } = props;
</script>

<div class="kobber-card">
    <Paper>
        {@render children?.()}
    </Paper>
</div>

<style>
    .kobber-card {
        display: grid;
    }
</style>
