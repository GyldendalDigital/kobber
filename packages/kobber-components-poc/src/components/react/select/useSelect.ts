import type { SelectOptions } from "@gyldendal/kobber-components-core/select/select";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as select from "@zag-js/select";
import { useId } from "react";

export const useSelect = ({ items }: SelectOptions) => {
  const collection = select.collection({
    items,
    itemToString: item => item.label,
    itemToValue: item => item.value,
  });

  const service = useMachine(select.machine, {
    id: useId(),
    collection,
  });

  const api = select.connect(service, normalizeProps);

  return api;
};
