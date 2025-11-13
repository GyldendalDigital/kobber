<script lang="ts">
    import * as css from "../css/card-media-wrapper.css";
    let props = $props();
    let { children } = props;


    // NOTE(sølve): can be extracted, same for multiple formats
    const classes = `${css.cardMediaWrapper}}`;

</script>

<div class={classes} {...props}>
    {@render children?.()}
</div>
