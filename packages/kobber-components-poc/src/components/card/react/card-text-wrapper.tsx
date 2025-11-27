import type { ReactNode } from "react";
import { cardTextWrapperApi } from "../index.api";
import { useCardContext } from "./card-context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const CardTextWrapper: React.FC<Props> = ({ children, className, ...props }) => {
  const { direction } = useCardContext();
  const css = cardTextWrapperApi({ direction });

  const classes = `${css.root.className} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
