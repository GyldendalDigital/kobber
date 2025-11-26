import clsx from "clsx";
import { type HTMLAttributes, type ReactNode, useContext } from "react";
import { AspectRatio } from "../../../aspectRatio/AspectRatio.react";
import { Context } from "../context/context";
import type { ColumnProps } from "../core/types";
import { cardLayoutColumnApi } from "./cardLayoutColumn.api";

export interface Props extends HTMLAttributes<HTMLDivElement>, ColumnProps {
  children?: ReactNode;
}

export const CardLayoutColumn = (props: Props) => {
  const { modernCss } = useContext(Context);
  return modernCss ? <Modern {...props} /> : <Legacy {...props} />;
};

const Modern = ({ children, ...props }: Props) => {
  const context = useContext(Context);
  const attributes = cardLayoutColumnApi({
    ...props,
    columnAspectRatio: context.columnAspectRatio,
    modernCss: true,
  });
  return (
    <div
      {...attributes.root}
      className={clsx(attributes.root.className, props.className)}
    >
      <div className={attributes.padding.className}>{children}</div>
    </div>
  );
};

const Legacy = ({ children, ...props }: Props) => {
  const context = useContext(Context);
  const attributes = cardLayoutColumnApi({
    ...props,
    columnAspectRatio: context.columnAspectRatio,
    modernCss: false,
  });
  return (
    <div
      {...attributes.root}
      className={clsx(attributes.root.className, props.className)}
    >
      <div className={attributes.padding.className}>
        {context.columnAspectRatio === undefined ? (
          children
        ) : (
          <AspectRatio aspectRatio={`1/${context.columnAspectRatio}`}>
            {children}
          </AspectRatio>
        )}
      </div>
    </div>
  );
};
