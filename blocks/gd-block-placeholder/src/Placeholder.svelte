<script lang="ts">
  import "@gyldendal/kobber-base/themes/default/tokens.css";
  import type { PlaceholderData } from "../types";
  export let data: PlaceholderData;
</script>

<div class="container">
  <span>
    {data.text}
  </span>
</div>

<style>
  .container {
    display: flex;
    background-color: var(--kobber-primitives-color-purple-400);
    border-radius: var(--kobber-primitives-size-8);
    padding: var(--kobber-semantic-layout-container-padding-large);
    flex-direction: column;
    font-size: var(--kobber-primitives-size-24);
    width: 100%;
  }
</style>
