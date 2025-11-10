import React, { createContext, useContext, useState } from "react";
import "./card.css";
import { Paper } from "../paper/paper.react.js";
import * as toggleButton from "../toggleButton/toggleButton.js";
import { normalizeProps, useMachine } from "@zag-js/react";

type CardContextValue = {
  api: any;
  registerLink: (link: HTMLAnchorElement | null) => void;
  link: HTMLAnchorElement | null;
};

// NOTE(sølve): should we expose the context outside of our components?
// That would enable more custom usecases.
const CardContext = createContext<CardContextValue | null>(null);

export function useCardContext() {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("useCardContext must be used within <Card>");
  return ctx;
}

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

  const classes = `ui-card ${direction ? direction : ""} ${
    className ? `${className}` : ""
  }`;

  // NOTE(sølve): consider seperating api props and user props, so
  // that they dont interfere with each other. Or, maybe that is wanted?
  // Unsure...
  return (
    <CardContext.Provider
      value={{
        api: api,
        registerLink: setLink,
        link: link,
      }}
    >
      {/*
        Code related to the note above
        <div {...api.getButtonProps()}>
        <Paper elevation={2} rounded className={classes} {...props}>
          {children}
        </Paper>
      </div>
      */}
      <div {...api.getButtonProps()}>
        <Paper elevation={2} rounded className={classes} {...props}>
          {children}
        </Paper>
      </div>
      {/*<Paper
        elevation={2}
        rounded
        className={classes}
        {...api.getButtonProps()}
        {...props}
      >
        {children}
      </Paper>*/}
    </CardContext.Provider>
  );
};

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaType?: "img" | "video" | "audio" | "picture" | "iframe";
}

export const CardMedia: React.FC<CardMediaProps> = ({
  mediaType = "img",
  children,
  ...props
}) => {
  const classes = `ui-card-media ${
    mediaType === "img" || mediaType === "picture" ? "image" : "media"
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardMediaWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = `ui-card-media-wrapper`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

interface CardMediaLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  base?: boolean;
  direction?: "vertical" | "horizontal";
}

export const CardMediaLayer: React.FC<CardMediaLayerProps> = ({
  base,
  direction,
  children,
  ...props
}) => {
  const classes = `ui-card-media-layer ${
    !base
      ? direction === "vertical"
        ? "vertical-padding"
        : "horizontal-padding"
      : ""
  }`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = `ui-card-text-wrapper`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextTitle: React.FC<any> = ({ children, ...props }) => {
  const { api } = useCardContext();
  const classes = `ui-card-text-title ${
    api && api.active ? "active" : "inactive"
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextBody: React.FC<any> = ({ children, ...props }) => {
  const classes = `ui-card-text-body`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
