<script lang="ts">
    import { cardMediaWrapperApi } from "../index.api";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { children } = props;
    const { direction } = getCardContext();
    const css = cardMediaWrapperApi({direction});
    const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
