import clsx from "clsx";
import { type HTMLAttributes, type ReactNode, useContext } from "react";
import { AspectRatio } from "../../../aspectRatio/AspectRatio.react";
import { Context } from "../context/context";
import { breakpoints, type maxColumns } from "../core/config";
import {
  getColumnAttributesLegacy,
  getColumnAttributesModern,
} from "../core/getAttributes";
import type { ColumnProps } from "../core/types";

export interface Props extends HTMLAttributes<HTMLDivElement>, ColumnProps {
  children?: ReactNode;
}

export const CardLayoutColumn = (props: Props) => {
  const { modernCss } = useContext(Context);
  console.log("getColumnInfo", getColumnInfo(props.span));
  return modernCss ? <Modern {...props} /> : <Legacy {...props} />;
};

const getColumnInfo = (span?: keyof typeof maxColumns) => {
  return breakpoints[1200][4];
};

const Modern = ({ children, ...props }: Props) => {
  const context = useContext(Context);
  const attributes = getColumnAttributesModern(props, context);
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
  const attributes = getColumnAttributesLegacy(props, context);
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
