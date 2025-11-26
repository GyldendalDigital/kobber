import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { normalizeProps, useMachine } from "@zag-js/react";
import type { HTMLAttributes, ReactNode } from "react";
import { toggleButtonApi } from "../index.api";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  state: toggleButton.State;
  children?: ReactNode;
}

export const ToggleButton = ({ children, ...props }: Props) => {
  const service = useMachine(toggleButton.machine, props);
  const stateMachineApi = toggleButton.connect(service, normalizeProps);
  const api = toggleButtonApi({ isActive: stateMachineApi.active });
  return (
    <button
      {...stateMachineApi.getButtonProps()}
      {...props}
      className={api.root.className}
    >
      {children}
    </button>
  );
};
