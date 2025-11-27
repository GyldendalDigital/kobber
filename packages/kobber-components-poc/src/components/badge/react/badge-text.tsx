import type React from "react";
import * as css from "../css/badge-text.css";

export const BadgeText: React.FC<any> = ({
  className = "",
  children,
  ...props
}): any => {
  const classes = `${css.badgeText} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
