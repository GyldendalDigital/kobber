<script lang="ts">
    import * as css from "../css/card-text-title.css";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { children } = props;
    const { api } = getCardContext();
    const classes = `${css.cardTextTitle} ${api && api().active ? css.active : ""}`;
</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
