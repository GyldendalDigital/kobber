<script lang="ts">
import Card  from "../../../kobber-components-core/src/card/svelte/card.svelte";
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

<Card />
