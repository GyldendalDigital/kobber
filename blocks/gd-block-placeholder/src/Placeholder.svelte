<script lang="ts">
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
    background-color: #9673E7;
    border-radius: 8px;
    padding: 24px;
    flex-direction: column;
    font-size: 24px;
    width: 100%;
  }
</style>
