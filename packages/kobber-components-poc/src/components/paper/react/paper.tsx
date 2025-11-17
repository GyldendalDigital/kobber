import React, { ReactHTMLElement } from "react";
import * as css from "../css/paper.css";

export interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  element?: string;
}

export const Paper: React.FC<PaperProps> = ({
  element = undefined,
  ...props
}): any => {
  let classes = `${css.paper} ${props.className}`;

  if (element) {
    return React.createElement(element, {
      className: classes,
      ...props,
    });
  } else {
    return React.createElement("div", { className: classes, ...props });
  }
};
