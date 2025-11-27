import type { ReactNode } from "react";
import { cardTextTitleApi } from "../index.api";
import { useCardContext } from "./card-context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const CardTextTitle: React.FC<Props> = ({ children, className, ...props }) => {
  const { api } = useCardContext();
  // NOTE(sølve): disabled is handled by the state machine here,
  // which is why its not sent into the css api.
  const css = cardTextTitleApi({ active: api().active });

  const classes = `${css.root.className} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
