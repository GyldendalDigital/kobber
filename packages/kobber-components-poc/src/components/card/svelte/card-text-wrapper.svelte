<script lang="ts">
    import { cardTextWrapperApi } from "../index.api";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { children } = props;
    const { direction } = getCardContext();
    const css = cardTextWrapperApi({direction})
    const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
