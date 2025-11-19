import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import type { NormalizeProps, PropTypes } from "@zag-js/types";
import { dataAttr } from "@zag-js/dom-query";
import { createAnatomy } from "@zag-js/anatomy";

const anatomy = createAnatomy("card").parts("card", "title");
const parts = anatomy.build();

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

interface MachineProps {
  disabled: boolean;
}

export interface CardMachineSchema extends MachineSchema {
  props: MachineProps;
  context: {
    fieldsetDisabled: boolean;
  };
  computed: {
    disabled: boolean;
  };
}

export const machine = createMachine<CardMachineSchema>({
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
      },
    },
    idle: {
      on: {
        ENTER: {
          guard: "canHover",
          target: "hover",
        },
      },
    },
    disabled: {},
  },
});

export const connect = <T extends PropTypes>(
  service: Service<CardMachineSchema>,
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
    getCardProps() {
      return normalize.element({
        ...dataAttributes,
        ...parts.card.attrs,
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
