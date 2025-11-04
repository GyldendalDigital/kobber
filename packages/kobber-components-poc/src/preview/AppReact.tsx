import { useId } from "react";
import { Select } from "../components/react/select/Select";
import { ToggleButton } from "../components/toggleButton/ToggleButton";
import { getSelectProps } from "./shared/props";

export function AppReact() {
  const id = useId();
  return (
    <div>
      <ToggleButton initialState="active">Custom machine</ToggleButton>
      <br />
      <br />
      <Select {...getSelectProps(id)} />
    </div>
  );
}
