<script lang="ts">
import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { normalizeProps, useMachine } from "@zag-js/svelte";
import type { Snippet } from "svelte";
import { toggleButtonApi } from "../index.api";

const props: { state: toggleButton.State; children: Snippet } = $props();

// biome-ignore lint/correctness/useHookAtTopLevel: ""
const service = useMachine(toggleButton.machine, props);
const stateMacineApi = $derived(toggleButton.connect(service, normalizeProps));
const api = $derived(toggleButtonApi({ isActive: stateMacineApi.active }));
</script>

<button
  {...stateMacineApi.getButtonProps()}
  class={api.root.className}
>
  {@render props.children()}
</button>
