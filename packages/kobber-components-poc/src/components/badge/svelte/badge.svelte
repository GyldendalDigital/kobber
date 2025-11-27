<script lang="ts">
import * as css from "../css/badge.css";

const props = $props();
const { children } = props;

const classes = `${css.badge} ${props.class}`;
</script>

<div class={classes}>
    {@render children?.()}
</div>

