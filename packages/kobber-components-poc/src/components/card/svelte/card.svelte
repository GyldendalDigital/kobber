<script lang="ts">
    import Paper from "../../paper/paper.svelte";
    import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
    import { normalizeProps, useMachine } from "@zag-js/svelte";
    import { getCardContext, setCardContext } from "./card-context";
    import * as css from "../css/card.css";
    import type { HTMLAttributes } from 'svelte/elements'

    interface CardProps extends HTMLAttributes<HTMLDivElement> {
      direction?: "vertical" | "horizontal";
      element?: string;
    }
    let props = $props();
    let { direction = "vertical", children } = props as CardProps;
    const service = useMachine(toggleButton.machine, { initialState: "inactive" });
    const api = $derived(toggleButton.connect(service, normalizeProps));
    const apiRef = () => api;
    setCardContext({api: apiRef, link: null, registerLink: () => {}, direction});
    const context = getCardContext();

    const classes = `${css.card} ${direction ? css[direction] : ""}`
</script>

<Paper class={classes}  {...context.api().getButtonProps()}>
    {@render children?.()}
</Paper>
