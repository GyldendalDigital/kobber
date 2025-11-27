import { createAnatomy } from "@zag-js/anatomy";
import { createMachine, type MachineSchema, type Service } from "@zag-js/core";
import { dataAttr } from "@zag-js/dom-query";
import type { NormalizeProps, PropTypes } from "@zag-js/types";

const anatomy = createAnatomy("card").parts("card", "title");
const parts = anatomy.build();

export type CardDirectionType = "vertical" | "horizontal";
export type CardMediaType = "img" | "video" | "audio" | "picture" | "iframe";

export interface CardProps {
  direction?: CardDirectionType;
  disabled?: boolean;
  element?: string;
}

export type CardContext = {
  // biome-ignore lint/suspicious/noExplicitAny: ""
  api: () => any;
  link: HTMLAnchorElement | null;
  registerLink: (link: HTMLAnchorElement | null) => void;
  direction: CardDirectionType;
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
  normalize: NormalizeProps<T>,
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
