import React from "react";
import * as css from "../css/badge.css";

export const Badge: React.FC<any> = ({ className = "", ...props }): any => {
  let classes = `${css.badge} ${className}`;

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};
