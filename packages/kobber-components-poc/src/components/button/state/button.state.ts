import { createAnatomy } from "@zag-js/anatomy";
import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import { dataAttr } from "@zag-js/dom-query";
import type { NormalizeProps, PropTypes } from "@zag-js/types";

const anatomy = createAnatomy("button").parts("button", "contents");
const parts = anatomy.build();

interface MachineProps {
  disabled?: boolean;
}

export interface ButtonMachineSchema extends MachineSchema {
  props: MachineProps;
  context: {
    fieldsetDisabled: boolean;
  };
  computed: {
    disabled: boolean;
  };
}

export const machine = createMachine<ButtonMachineSchema>({
  props({ props }) {
    return {
      disabled: false,
      ...props,
    };
  },
  context({ bindable }) {
    return {
      fieldsetDisabled: bindable(() => ({ defaultValue: false })),
    };
  },
  computed: {
    disabled({ prop, context }) {
      return !!prop("disabled") || context.get("fieldsetDisabled");
    },
  },
  implementations: {
    guards: {
      canHover({ computed }) {
        return !computed("disabled");
      },
    },
  },
  initialState() {
    return "idle";
  },
  states: {
    hover: {
      on: {
        LEAVE: {
          guard: "canHover",
          target: "idle",
        },
        CLICK: {
          guard: "canHover",
          target: "active",
        },
      },
    },
    idle: {
      on: {
        ENTER: {
          guard: "canHover",
          target: "hover",
        },
        CLICK: {
          guard: "canHover",
          target: "active",
        },
      },
    },
    disabled: {},
  },
});

export const connect = <T extends PropTypes>(
  service: Service<ButtonMachineSchema>,
  normalize: NormalizeProps<T>
) => {
  const { state, prop } = service;
  const disabled = !!prop("disabled");
  const dataAttributes = {
    "data-disabled": dataAttr(disabled),
  };
  const active = state.matches("hover");
  return {
    active,
    getButtonProps() {
      return normalize.element({
        ...dataAttributes,
        ...parts.button.attrs,
        onMouseEnter() {
          service.send({ type: "ENTER" });
          console.log("hover");
        },
        onMouseLeave() {
          service.send({ type: "LEAVE" });
        },
      });
    },
  };
};
