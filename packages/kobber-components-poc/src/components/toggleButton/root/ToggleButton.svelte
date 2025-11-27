<script lang="ts">
import { normalizeProps, useMachine } from "@zag-js/svelte";
import type { Snippet } from "svelte";
import { toggleButtonApi } from "../index.api";
import * as stateMachine from "../state/toggleButton";

const props: { state: stateMachine.State; children: Snippet } = $props();

// biome-ignore lint/correctness/useHookAtTopLevel: ""
const service = useMachine(stateMachine.machine, props);
const stateMacineApi = $derived(stateMachine.connect(service, normalizeProps));
const api = $derived(toggleButtonApi({ isActive: stateMacineApi.active }));
</script>

<button
  {...stateMacineApi.getButtonProps()}
  class={api.root.className}
>
  {@render props.children()}
</button>
