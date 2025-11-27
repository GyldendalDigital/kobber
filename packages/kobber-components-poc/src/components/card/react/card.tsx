import { normalizeProps, useMachine } from "@zag-js/react";
import type React from "react";
import { useState } from "react";
import { cardApi } from "../index.api";
import {
  type CardMachineSchema,
  type CardProps,
  connect,
  machine,
} from "../state/card.core.js";
import { ReactCardContext } from "./card-context";

const a = 1;

interface CardReactProps
  extends CardProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardReactProps> = ({
  direction = "vertical",
  disabled = false,
  children,
  className = "",
  ...props
}) => {
  const api = connect(
    useMachine<CardMachineSchema>(machine, { disabled: disabled }),
    normalizeProps
  );
  const [link, setLink] = useState<HTMLAnchorElement | null>(null);
  const css = cardApi({ direction });
  const classes = `${css.root.className} ${className ? className : ""}`;
  return (
    <ReactCardContext.Provider
      value={{
        api: () => api,
        registerLink: setLink,
        link: link,
        direction: direction,
      }}
    >
      <div {...api.getCardProps()} className={classes} {...props}>
        {children}
      </div>
    </ReactCardContext.Provider>
  );
};
