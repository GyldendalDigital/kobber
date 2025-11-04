<script lang="ts">
import type { SelectOptions } from "@gyldendal/kobber-components-core/select/select";
import * as select from "@zag-js/select";
import { normalizeProps, portal } from "@zag-js/svelte";
import { svelteSelect } from "./useSelect.svelte";

const props: SelectOptions = $props();

const { service } = svelteSelect({ ...props });
const api = $derived(select.connect(service, normalizeProps));
</script>

<div {...api.getRootProps()}>
  <div {...api.getControlProps()}>
    <label {...api.getLabelProps()}>Label</label>
    <button {...api.getTriggerProps()}>
      {api.valueAsString || "Svelte Select"}
    </button>
  </div>

  <div use:portal {...api.getPositionerProps()}>
    <ul {...api.getContentProps()}>
      {#each props.items as item}
        <li {...api.getItemProps({ item })}>
          <span {...api.getItemTextProps({ item })}>{item.label}</span>
          <span {...api.getItemIndicatorProps({ item })}>✓</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
