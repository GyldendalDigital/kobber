import type React from "react";
import type { ReactNode } from "react";
import * as css from "../css/badge-text.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const BadgeText: React.FC<Props> = ({ className = "", children, ...props }) => {
  const classes = `${css.badgeText} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
