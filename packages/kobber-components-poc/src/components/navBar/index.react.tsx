import type { HTMLAttributes, ReactNode } from "react";
import { navBarApi } from "./index.api";

type Args = Parameters<typeof navBarApi>[0];

interface Props extends HTMLAttributes<HTMLDivElement>, Args {
  children?: ReactNode;
}

export const NavBar = ({ children, ...props }: Props) => {
  const api = navBarApi(props);
  return (
    <div {...props} className={api.root.className}>
      {children}
    </div>
  );
};
