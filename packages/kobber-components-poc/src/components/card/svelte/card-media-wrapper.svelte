<script lang="ts">
    let props = $props();
    let { children } = props;

    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `ui-card-media-wrapper`;

</script>

<div style="background-color: red;" class={classes} {...props}>
    {@render children?.()}
</div>
