import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { Context } from "../context/context";
import { getRootAttributes } from "../core/getAttributes";
import type { Props } from "../core/types";

export interface CardLayoutProps extends HTMLAttributes<HTMLDivElement>, Props {
  children?: ReactNode;
}

export const CardLayout = ({ children, ...props }: CardLayoutProps) => {
  const attributes = getRootAttributes(props);
  return (
    <Context.Provider value={attributes.contextProvider.value}>
      <div
        {...attributes.root}
        className={clsx(attributes.root.className, props.className)}
      >
        <div {...attributes.queryContainer}>
          <div {...attributes.grid}>{children}</div>
        </div>
      </div>
    </Context.Provider>
  );
};
