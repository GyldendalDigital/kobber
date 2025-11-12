<script lang="ts">
  import * as css from "../css/card-media-layer.module.css";

    let props = $props();
    let { base, direction, children } = props;

    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `${css.cardMediaLayer}`;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
