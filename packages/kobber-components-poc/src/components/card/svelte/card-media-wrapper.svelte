<script lang="ts">
    import * as css from "../css/card-media-wrapper.css";
    import { getCardContext } from "./card-context";

    let props = $props();
    let { children } = props;
    const { direction } = getCardContext();
    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `${css.cardMediaWrapper} ${
      direction === "horizontal" ? css.horizontal : ""
    }`;
    console.log(classes);

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
