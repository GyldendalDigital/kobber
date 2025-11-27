<script lang="ts">
import { normalizeProps, useMachine } from "@zag-js/svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cardApi } from "../index.api";
import { type CardMachineSchema, connect, machine } from "../state/card.core.js";
import { getCardContext, setCardContext } from "./card-context";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  element?: string;
  disabled?: boolean;
}
const props = $props();
const { direction = "vertical", disabled = false, children } = props as CardProps;

const service = useMachine<CardMachineSchema>(machine, { disabled: disabled });
const api = $derived(connect(service, normalizeProps));
const apiRef = () => api;

setCardContext({ api: apiRef, link: null, registerLink: () => {}, direction });
const context = getCardContext();

const css = cardApi({ direction, disabled });
const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes}  {...context.api().getCardProps()} {...props}>
    {@render children?.()}
</div>
