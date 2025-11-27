<script lang="ts">
import { cardMediaLayerApi } from "../index.api";
import { getCardContext } from "./card-context";

const props = $props();
const { base, children } = props;
const { direction } = getCardContext();
const css = cardMediaLayerApi({ direction, base });
const classes = `${css.root.className} ${props.class}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>

