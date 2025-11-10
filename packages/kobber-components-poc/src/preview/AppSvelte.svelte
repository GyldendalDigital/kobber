<script lang="ts">
import CardMedia  from "../components/card/svelte/card-media.svelte";
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
    <CardMedia>MEDIA</CardMedia>
</Card>
