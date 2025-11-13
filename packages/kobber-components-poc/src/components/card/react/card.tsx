import React, { useState } from "react";
import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as css from "../css/card.css";
import { Paper } from "../../paper/react/paper";
import { ReactCardContext } from "./card-context";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  element?: string;
}

export const Card: React.FC<CardProps> = ({
  direction = "vertical",
  children,
  className = "",
  ...props
}) => {
  const api = toggleButton.connect(
    useMachine(toggleButton.machine, { initialState: "inactive" }),
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
      {/*<div {...api.getButtonProps()}>
        <Paper elevation={2} rounded className={classes} {...props}>
          {children}
        </Paper>
      </div>*/}
      <Paper
        elevation={2}
        rounded
        className={classes}
        {...api.getButtonProps()}
        {...props}
      >
        {children}
      </Paper>
    </ReactCardContext.Provider>
  );
};
