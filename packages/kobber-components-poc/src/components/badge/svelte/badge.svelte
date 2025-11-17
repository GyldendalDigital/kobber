<script lang="ts">
    import * as css from "../css/badge.css";
    let props = $props();
    let { children } = props;

    const classes = `${css.badge} ${props.class}`;
</script>

<div class={classes}>
    {@render children?.()}
</div>
