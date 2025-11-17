import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { normalizeProps, useMachine } from "@zag-js/react";
import type { ReactNode } from "react";
import { getClassNames } from "./core";

interface Props {
  state: toggleButton.State;
  children?: ReactNode;
}

export const ToggleButton = ({ children, ...props }: Props) => {
  const service = useMachine(toggleButton.machine, props);
  const api = toggleButton.connect(service, normalizeProps);
  const classNames = getClassNames(api);
  return (
    <button {...api.getButtonProps()} className={classNames.root}>
      {children}
    </button>
  );
};
