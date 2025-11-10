<script lang="ts">
    let props = $props();
    let { children, mediaType = "img" } = props;

    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `ui-card-media ${
      mediaType === "img" || mediaType === "picture" ? "image" : "media"
    }`;

</script>

<div style="background-color: red;" class={classes} {...props}>
    {@render children?.()}
</div>
