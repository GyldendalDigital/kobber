<script lang="ts">
import { formatIconName, buttonIconApi, type ButtonIconProps } from "../index.api";
import type { HTMLAttributes } from "svelte/elements";
import * as icons from "@gyldendal/kobber-icons/web-components";

interface Props extends ButtonIconProps, HTMLAttributes<HTMLDivElement> {}

 const props = $props();
 const { icon, children } = props as Props;


const buttonIconCss = buttonIconApi();
const classes = `${buttonIconCss.root.className} ${props.class}`

let Icon: any;
if (icon) {
  // @ts-expect-error
  console.log(icons[formatIconName(icon)])
  // // @ts-expect-error
  // Icon = new icons[formatIconName(icon)];
}

</script>

<div class={classes} {...props}>
  {#if icon}
    <svelte:element this={icon} size="large"/>
  {:else}
    {@render children?.()}
  {/if}
</div>
