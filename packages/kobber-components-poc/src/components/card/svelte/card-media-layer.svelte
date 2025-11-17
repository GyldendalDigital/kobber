<script lang="ts">
  import * as css from "../css/card-media-layer.css";
  import { getCardContext } from "./card-context";

  let props = $props();
  let { base, children } = props;
  const { direction } = getCardContext();
  // NOTE(sølve): can be extracted, same for multiple formats
  const classes = `${css.cardMediaLayer} ${
    !base ? (direction === "vertical" ? css.vertical : css.horizontal) : ""
  }`;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
