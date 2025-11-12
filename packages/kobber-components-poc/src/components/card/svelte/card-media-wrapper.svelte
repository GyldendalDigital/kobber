<script lang="ts">
    import * as css from "../css/card-media-wrapper.module.css";
    let props = $props();
    let { direction = "vertical", children } = props;

    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `${css.cardMediaWrapper} ${direction ? css[direction] : ""}`;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
