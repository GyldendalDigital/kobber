import type { SelectOptions } from "@gyldendal/kobber-components-core/select/select";
import { Portal } from "@zag-js/react";
import { useSelect } from "./useSelect";

export function Select(props: SelectOptions) {
  const api = useSelect({ ...props });
  return (
    <div {...api.getRootProps()}>
      <div {...api.getControlProps()}>
        {/** biome-ignore lint/a11y/noLabelWithoutControl: "" */}
        <label {...api.getLabelProps()}>Label</label>
        <button {...api.getTriggerProps()}>
          {api.valueAsString || "React Select"}
        </button>
      </div>
      <Portal>
        <div {...api.getPositionerProps()}>
          <ul {...api.getContentProps()}>
            {props.items.map((item) => (
              <li key={item.value} {...api.getItemProps({ item })}>
                <span>{item.label}</span>
                <span {...api.getItemIndicatorProps({ item })}>✓</span>
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  );
}
