import type { ReactNode } from "react";
import * as css from "../css/button-icon.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ButtonIcon: React.FC<Props> = ({ children, ...props }) => {
  const classes = `${css.buttonIcon} ${""}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
