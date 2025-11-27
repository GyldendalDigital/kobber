<script lang="ts">
    import * as css from "../css/paper.css";
    let props = $props();
    let { children } = props;

    const classes = `${css.paper} ${props.class}`;
</script>

<div class={classes}>
    {@render children?.()}
</div>
