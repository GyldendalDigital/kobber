<script lang="ts">
import type { ToggleButtonOptions } from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { normalizeProps, useMachine } from "@zag-js/svelte";
import type { Snippet } from "svelte";
import { getClassNames } from "./core";

const props: ToggleButtonOptions & { children: Snippet } = $props();

// biome-ignore lint/correctness/useHookAtTopLevel: ""
const service = useMachine(toggleButton.machine, props);
const api = $derived(toggleButton.connect(service, normalizeProps));
const classNames = $derived(getClassNames(api));
</script>

<button
  {...api.getButtonProps()}
  class={classNames.root}
>
  {@render props.children()}
</button>
