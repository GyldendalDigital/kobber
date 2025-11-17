import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";

export type State = "active" | "inactive";

export const machine = createMachine({
  initialState: (): State => "inactive",
  states: {
    active: { on: { CLICK: { target: "inactive" } } },
    inactive: { on: { CLICK: { target: "active" } } },
  },
});

export const connect = <T extends PropTypes>(
  service: Service<MachineSchema>,
  normalize: NormalizeProps<T>
) => {
  const active = service.state.matches("active");
  return {
    active,
    getButtonProps: () =>
      normalize.element({
        type: "button",
        role: "switch",
        "aria-checked": active,
        onClick: () => service.send({ type: "CLICK" }),
      }),
  };
};

export type Api = ReturnType<typeof connect>;
