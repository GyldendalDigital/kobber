<script lang="ts">
    import * as css from "../css/button.css";
    let props = $props();
    let { children } = props;

    const classes = `${css.button} ${props.class}`;
</script>

<button class={classes}>
    {@render children?.()}
</button>
