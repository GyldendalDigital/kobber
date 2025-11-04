<script lang="ts">
import Select from "../components/svelte/select/Select.svelte";
import ToggleButton from "../components/toggleButton/ToggleButton.svelte";
import { getSelectProps } from "./shared/props";
</script>

<ToggleButton>Custom machine</ToggleButton>

<br />
<br />


<Select {...getSelectProps("test-id")} />
