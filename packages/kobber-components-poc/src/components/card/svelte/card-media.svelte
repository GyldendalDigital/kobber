<script lang="ts">
    import * as css from "../css/card-media.module.css";
    import { getCardContext } from "./card-context";
    let props = $props();
    let { mediaType = "img", children } = props;
    const { direction } = getCardContext();
    const localDirection = props.direction ? props.direction : direction;
    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `
      ${css.cardMedia}
      ${mediaType === "img" || mediaType === "picture" ? css.image : css.media}
      ${localDirection ? css[localDirection] : ""}
    `;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
