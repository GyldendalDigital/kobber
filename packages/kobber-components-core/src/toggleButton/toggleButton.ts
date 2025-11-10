import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";

export interface ToggleButtonOptions {
  initialState?: "active" | "inactive";
}

export const machine = createMachine({
  initialState() {
    return "inactive";
  },

  // The finite states
  states: {
    active: {
      on: {
        CLICK: {
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        CLICK: {
          target: "active",
        },
      },
    },
  },
});

export const connect = <T extends PropTypes>(
  service: Service<MachineSchema>,
  normalize: NormalizeProps<T>,
) => {
  const { state } = service;
  const active = state.matches("active");
  return {
    active,
    getButtonProps() {
      return normalize.element({
        type: "button",
        role: "switch",
        "aria-checked": active,
        onClick() {
          service.send({ type: "CLICK" });
        },
      });
    },
  };
};

export type Api = ReturnType<typeof connect>;
