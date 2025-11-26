<script lang="ts">
    import { cardTextBodyApi } from "../index.api";

    let props = $props();
    let { children } = props;
    const css = cardTextBodyApi()
    const classes = `${css.root.className}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
