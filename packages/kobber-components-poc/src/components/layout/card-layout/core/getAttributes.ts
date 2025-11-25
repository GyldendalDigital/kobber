import { clsx } from "clsx";
import * as css from "../cardLayout/cardLayout.css";
import * as variables from "../cardLayout/variables.css";
import * as columnCss from "../cardLayoutColumn/cardLayoutColumn.css";
import type { Context } from "../context/context";
import { columnDefaults, defaults } from "./config";
import type { ColumnProps, Props } from "./types";

export const getRootAttributes = (props: Props) => {
  const {
    maxWidth,
    maxColumns,
    columnAspectRatio,
    paddingInline,
    gap,
    modernCss,
    ...htmlAttributes
  } = {
    ...defaults,
    ...props,
  };

  const modifierClass = modernCss
    ? css.modifierClasses.find(
        object => object.maxWidth === maxWidth && object.maxColumns === maxColumns,
      )?.generatedClassName
    : css.modifierForLegacyBrowsers;

  return {
    contextProvider: {
      value: { columnAspectRatio, modernCss },
    },
    root: {
      ...htmlAttributes,
      className: css.root,
      style: {
        [variables.paddingInlineVar as string]: paddingInline,
        [variables.gapVar as string]: gap,
        [variables.maxWidthVar as string]: maxWidth,
        [variables.maxColumnsVar as string]: maxColumns,
      },
    },
    queryContainer: {
      className: css.queryContainer,
    },
    grid: {
      className: clsx(css.grid, modifierClass),
    },
  };
};

export const getColumnAttributesModern = (props: ColumnProps, { columnAspectRatio }: Context) => {
  const { span, ...htmlAttributes } = { ...columnDefaults, ...props };

  const className = clsx({
    [columnCss.span1]: span === 1,
    [columnCss.span2]: span === 2,
    [columnCss.span3]: span === 3,
    [columnCss.span4]: span === 4,
    [columnCss.span5]: span === 5,
    [columnCss.span6]: span === 6,
    [columnCss.span7]: span === 7,
    [columnCss.span8]: span === 8,
    [columnCss.span9]: span === 9,
    [columnCss.span10]: span === 10,
    [columnCss.span11]: span === 11,
    [columnCss.span12]: span === 12,
  });

  return {
    root: {
      ...htmlAttributes,
      className,
      style: { [variables.aspectRatioVar as string]: columnAspectRatio },
    },
    padding: {
      className: columnCss.padding,
    },
  };
};

export const getColumnAttributesLegacy = (props: ColumnProps, { columnAspectRatio }: Context) => {
  // biome-ignore lint/correctness/noUnusedVariables: ""
  const { span, ...htmlAttributes } = { ...columnDefaults, ...props };
  return {
    root: {
      ...htmlAttributes,
      className: columnCss.modifierForLegacyBrowsers,
      style: { [variables.aspectRatioVar as string]: columnAspectRatio },
    },
    padding: {
      className: columnCss.padding,
    },
  };
};
