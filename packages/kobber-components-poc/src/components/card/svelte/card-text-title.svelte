<script lang="ts">
    import { cardTextTitleApi } from "../index.api";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { children } = props;
    const { api } = getCardContext();
    const css = cardTextTitleApi({active: api && api().active})
    const classes = $derived(`${css.root.className} ${props.class}`);
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
