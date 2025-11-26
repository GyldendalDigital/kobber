import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { Context } from "../context/context";
import { defaults } from "../core/config";
import type { Props } from "../core/types";
import { cardLayoutApi } from "./cardLayout.api";

export interface CardLayoutProps extends HTMLAttributes<HTMLDivElement>, Props {
  children?: ReactNode;
}

export const CardLayout = ({
  children,
  maxWidth,
  maxColumns,
  paddingInline,
  gap,
  columnAspectRatio,
  modernCss,
  ...htmlAttributes
}: CardLayoutProps) => {
  const attributes = cardLayoutApi({
    maxWidth,
    maxColumns,
    paddingInline,
    gap,
    columnAspectRatio,
    modernCss,
  });
  return (
    <Context.Provider
      value={{ columnAspectRatio, modernCss: modernCss ?? defaults.modernCss }}
    >
      <div
        {...htmlAttributes}
        {...attributes.root}
        className={clsx(attributes.root.className, htmlAttributes.className)}
      >
        <div {...attributes.queryContainer}>
          <div {...attributes.grid}>{children}</div>
        </div>
      </div>
    </Context.Provider>
  );
};
