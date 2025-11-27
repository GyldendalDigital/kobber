import type { ReactNode } from "react";
import { cardMediaWrapperApi } from "../index.api";
import { useCardContext } from "./card-context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const CardMediaWrapper: React.FC<Props> = ({ children, className, ...props }) => {
  const { direction } = useCardContext();
  const css = cardMediaWrapperApi({ direction });
  const classes = `${css.root.className} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
