import type React from "react";
import type { ReactNode } from "react";
import * as css from "../css/badge.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Badge: React.FC<Props> = ({ className = "", ...props }) => {
  const classes = `${css.badge} ${className}`;

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};
