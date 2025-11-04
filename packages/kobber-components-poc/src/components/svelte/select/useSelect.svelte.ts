import type { SelectOptions } from "@gyldendal/kobber-components-core/select/select";
import * as select from "@zag-js/select";
import { useMachine } from "@zag-js/svelte";

export const svelteSelect = (props: SelectOptions) => {
  const collection = select.collection({
    items: props.items,
    itemToString: item => item.label,
    itemToValue: item => item.value,
  });

  const service = useMachine(select.machine, {
    collection,
    ...props,
  });

  //const api = $derived(select.connect(service, normalizeProps));

  return {
    collection,
    service,
  };
};
