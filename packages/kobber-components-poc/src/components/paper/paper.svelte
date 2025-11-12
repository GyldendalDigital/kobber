<script lang="ts">
    import * as css from "./paper.module.css";
    let props = $props();
    let { children } = props;

    const classes = `${css.uiPaper} ${props.class}`;
</script>

<div class={classes}>
    {@render children?.()}
</div>
