import { normalizeProps, useMachine } from "@zag-js/react";
import type { HTMLAttributes, ReactNode } from "react";
import { toggleButtonApi } from "../index.api";
import * as stateMachine from "../state/toggleButton";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  state: stateMachine.State;
  children?: ReactNode;
}

export const ToggleButton = ({ children, ...props }: Props) => {
  const service = useMachine(stateMachine.machine, props);
  const stateMachineApi = stateMachine.connect(service, normalizeProps);
  const api = toggleButtonApi({ isActive: stateMachineApi.active });
  return (
    <button {...stateMachineApi.getButtonProps()} {...props} className={api.root.className}>
      {children}
    </button>
  );
};
