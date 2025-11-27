<script lang="ts">
import * as css from "../css/badge-text.css";

const props = $props();
const { children } = props;

const classes = `${css.badgeText} ${props.class}`;
</script>

<div class={classes}>
    {@render children?.()}
</div>

