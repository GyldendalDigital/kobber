<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { buttonApi, buttonContainerApi, type ButtonType } from "../index.api";

interface Props extends ButtonType, HTMLAttributes<HTMLButtonElement> {}

const props = $props();
const { collection, purpose, level, tone, children } = props as Props;

const buttonCss = buttonApi(collection, purpose, level, tone);
const buttonContainerCss = buttonContainerApi().root.className;

const classes = `${buttonCss.root.className} ${props.class}`;

</script>

<button class={classes}>
  <div class={buttonContainerCss}>
    {@render children?.()}
  </div>
</button>

