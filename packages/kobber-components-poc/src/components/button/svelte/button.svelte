<script lang="ts">
import * as css from "../css/button.css";

const props = $props();
const { children } = props;

const classes = `${css.button} ${props.class}`;
</script>

<button class={classes}>
    {@render children?.()}
</button>

