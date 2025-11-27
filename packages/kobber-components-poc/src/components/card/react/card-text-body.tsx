import type { ReactNode } from "react";
import { cardTextBodyApi } from "../index.api";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const CardTextBody: React.FC<Props> = ({ children, className, ...props }) => {
  const css = cardTextBodyApi();
  const classes = `${css.root.className} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
