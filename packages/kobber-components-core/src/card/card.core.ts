import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";

// Shared code between the formats go here.
export interface CardProps {
  layout?: "horizontal" | "vertical";
}

export type CardContext = {
  api: () => any;
  link: HTMLAnchorElement | null;
  registerLink: (link: HTMLAnchorElement | null) => void;
  direction: "vertical" | "horizontal";
};

export const machine = createMachine({
  initialState() {
    return "idle";
  },
  states: {
    hover: {
      on: {
        CLICK: {
          target: "idle",
        },
        LEAVE: {
          target: "idle",
        },
      },
    },
    idle: {
      on: {
        ENTER: {
          target: "hover",
        },
      },
    },
  },
});

export const connect = <T extends PropTypes>(
  service: Service<MachineSchema>,
  normalize: NormalizeProps<T>
) => {
  const { state } = service;
  const active = state.matches("hover");
  return {
    active,
    getButtonProps() {
      return normalize.element({
        onMouseEnter() {
          service.send({ type: "ENTER" });
        },
        onMouseLeave() {
          service.send({ type: "LEAVE" });
        },
      });
    },
  };
};
