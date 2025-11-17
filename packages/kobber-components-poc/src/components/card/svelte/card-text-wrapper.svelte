<script lang="ts">
  import * as css from "../css/card-text-wrapper.css";
  import { getCardContext } from "./card-context";
  let props = $props();
  let { children } = props;
  const { direction } = getCardContext();

  const classes = `${css.cardTextWrapper} ${
      direction === "horizontal" ? css.horizontal : ""
  }`;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
