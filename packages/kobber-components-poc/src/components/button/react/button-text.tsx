import type { ReactNode } from "react";
import { buttonTextApi } from "../index.api";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ButtonText: React.FC<Props> = ({ children, ...props }) => {
  const buttonTextCss = buttonTextApi().root.className;
  const classes = `${buttonTextCss} ${props.className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
