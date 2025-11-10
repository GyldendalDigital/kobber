<script lang="ts">
  import Paper from "../../paper/paper.svelte";
    console.log("svelte card");
</script>

<div class="kobber-card">
    <Paper>
        <slot></slot>
    </Paper>
</div>

<style>
    .kobber-card {
        display: grid;
    }
</style>
