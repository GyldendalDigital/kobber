<script lang="ts">
    import { machine, connect, type CardMachineSchema } from "@gyldendal/kobber-components-core/card/card.core.js";
    import { normalizeProps, useMachine } from "@zag-js/svelte";
    import { getCardContext, setCardContext } from "./card-context";
    import type { HTMLAttributes } from 'svelte/elements'
    import { cardApi } from "../index.api";

    interface CardProps extends HTMLAttributes<HTMLDivElement> {
      direction?: "vertical" | "horizontal";
      element?: string;
      disabled?: boolean;
    }
    let props = $props();
    let { direction = "vertical", disabled = false, children } = props as CardProps;

    const service = useMachine<CardMachineSchema>(machine, { disabled: disabled });
    const api = $derived(connect(service, normalizeProps));
    const apiRef = () => api;

    setCardContext({api: apiRef, link: null, registerLink: () => {}, direction});
    const context = getCardContext();

    const css = cardApi({direction, disabled});
    const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes}  {...context.api().getCardProps()} {...props}>
    {@render children?.()}
</div>
