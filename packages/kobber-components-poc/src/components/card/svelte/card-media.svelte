<script lang="ts">
    import { cardMediaApi } from "../index.api";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { mediaType = "img", children } = props;
    const { direction } = getCardContext();
    const css = cardMediaApi({direction, mediaType});
    const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
