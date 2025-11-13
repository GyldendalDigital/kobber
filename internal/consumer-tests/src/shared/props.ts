import type { SelectOptions } from "@gyldendal/kobber-components-core/select/select";

export const getSelectProps = (id: string): SelectOptions => ({
  id,
  items: [
    { label: "Nigeria", value: "NG" },
    { label: "Japan", value: "JP" },
    { label: "Korea", value: "KO" },
    { label: "Kenya", value: "KE" },
    { label: "United Kingdom", value: "UK" },
    { label: "Ghana", value: "GH" },
    { label: "Uganda", value: "UG" },
    { label: "Sverige", value: "SWE" },
  ],
});
