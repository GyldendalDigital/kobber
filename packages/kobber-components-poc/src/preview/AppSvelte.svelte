<script lang="ts">
    import CardMediaWrapper from "../components/card/svelte/card-media-wrapper.svelte";
import CardMedia  from "../components/card/svelte/card-media.svelte";
    import CardTextTitle from "../components/card/svelte/card-text-title.svelte";
    import CardTextWrapper from "../components/card/svelte/card-text-wrapper.svelte";
import Card  from "../components/card/svelte/card.svelte";
import Select from "../components/svelte/select/Select.svelte";
import ToggleButton from "../components/toggleButton/ToggleButton.svelte";
import { getSelectProps } from "./shared/props";

</script>

<ToggleButton>Custom machine</ToggleButton>

<br />
<br />


<Select {...getSelectProps("test-id")} />

<br/>
<br/>

<Card>
    <CardMediaWrapper>
        <CardMedia>
            <!-- media -->
            <img alt="seksjonsteamet spiller shuffleboard" src="./shared/seksjonsteamet.png" />
        </CardMedia>
    </CardMediaWrapper>
    <CardTextWrapper>
        <CardTextTitle>Dette er en tittel</CardTextTitle>
        <p>mer tekst</p>
    </CardTextWrapper>
</Card>
