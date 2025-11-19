import React, { useState } from "react";
import {
  machine,
  connect,
  CardMachineSchema,
} from "@gyldendal/kobber-components-core/card/card.core.js";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as css from "../css/card.css";
import { ReactCardContext } from "./card-context";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  element?: string;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
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

  const classes = `${css.card} ${direction ? css[direction] : ""} ${
    className ? `${className}` : ""
  }`;

  // NOTE(sølve): consider seperating api props and user props, so
  // that they dont interfere with each other. Or, maybe that is wanted?
  // Unsure...
  return (
    <ReactCardContext.Provider
      value={{
        api: () => api,
        registerLink: setLink,
        link: link,
        direction: direction,
      }}
    >
      {/*
        Code related to the note above
      */}
      <div {...api.getCardProps()} className={classes} {...props}>
        {children}
      </div>
    </ReactCardContext.Provider>
  );
};
