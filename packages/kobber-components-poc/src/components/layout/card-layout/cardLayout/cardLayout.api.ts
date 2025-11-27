import { clsx } from "clsx";
import type { ApiComponent, ApiHtmlElement } from "../../../../core/api/types";
import { defaults, type maxColumns, type maxWidths } from "../core/config";
import type { Props } from "../core/types";
import * as classNames from "./cardLayout.css";
import * as variables from "./variables.css";

export const cardLayoutApi = (props: Props) => {
  const propsWithDefaults: Required<Props> = {
    ...defaults,
    ...props,
  };
  return {
    root: getRootElement(propsWithDefaults),
    queryContainer: getQueryContainerElement(),
    grid: getGridElement(propsWithDefaults),
  } satisfies ApiComponent;
};

const getRootElement = ({
  maxWidth,
  maxColumns,
  paddingInline,
  gap,
}: Required<Props>): ApiHtmlElement => {
  return {
    className: classNames.root,
    style: {
      [variables.paddingInlineVar as string]: paddingInline,
      [variables.gapVar as string]: gap,
      [variables.maxWidthVar as string]: maxWidth,
      [variables.maxColumnsVar as string]: maxColumns,
    },
  };
};

const getQueryContainerElement = (): ApiHtmlElement => {
  return {
    className: classNames.queryContainer,
  };
};

const getGridElement = ({ maxWidth, maxColumns, modernCss }: Required<Props>): ApiHtmlElement => {
  const modifierClass = modernCss
    ? getGridModifierClass(maxWidth, maxColumns)
    : classNames.modifierForLegacyBrowsers;
  return {
    className: clsx(classNames.grid, modifierClass),
  };
};

const getGridModifierClass = (maxWidth: keyof typeof maxWidths, maxCols: keyof typeof maxColumns) =>
  classNames.modifierClasses.find(
    object => object.maxWidth === maxWidth && object.maxColumns === maxCols,
  )?.generatedClassName;
