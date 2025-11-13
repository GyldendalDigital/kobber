import React, { ReactHTMLElement } from "react";
import * as css from "../css/paper.css";

export interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  elevation?: number;
  rounded?: boolean;
  element?: string;
}

export const Paper: React.FC<PaperProps> = ({
  rounded,
  elevation,
  element,
  className,
  ...props
}): any => {
  let classes = `${css.paper} ${className}`;

  if (element) {
    let tempElement = React.createElement(element, { ...props });
    return React.createElement(element, {
      className: classes,
      ...props,
    });
  } else {
    return React.createElement("div", { className: classes, ...props });
  }

  //return <div {...props} className={classes} />;
};
