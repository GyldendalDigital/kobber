<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { buttonTextApi } from "../index.api";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const props = $props();
const { children } = props as Props;

const buttonTextCss = buttonTextApi().root.className;
const classes = `${buttonTextCss} ${props.class}`  

</script>

<div class={classes} {...props}>
  {@render children?.()}
</div>
