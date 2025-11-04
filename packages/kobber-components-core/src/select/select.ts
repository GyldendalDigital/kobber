import type * as select from "@zag-js/select";

export interface SelectItem {
  label: string;
  value: string;
}

interface SelectProps extends Omit<select.Props, "id" | "collection"> {}

export interface SelectOptions extends SelectProps {
  id: string;
  items: SelectItem[];
}
