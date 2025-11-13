<script lang="ts">
    import * as css from "../css/card-text-title.module.css";

    let props = $props();
    let { children } = props;
    const classes = `${css.cardTextBody}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
