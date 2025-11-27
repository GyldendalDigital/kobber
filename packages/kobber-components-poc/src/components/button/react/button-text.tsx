import type { ReactNode } from "react";
import * as css from "../css/button-text.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ButtonText: React.FC<Props> = ({ children, ...props }) => {
  const classes = `${css.buttonText} ${""}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
