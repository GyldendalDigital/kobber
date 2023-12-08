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
    background-color: #cc4343;
    border-radius: 8px;
    padding: 8px;
    flex-direction: column;
    font-size: 18px;
  }
</style>
