import { clsx } from "clsx";
import type { ApiComponent, ApiHtmlElement } from "../../../../core/api/types";
import * as variables from "../cardLayout/variables.css";
import { columnDefaults } from "../core/config";
import type { ColumnProps } from "../core/types";
import * as columnClassNames from "./cardLayoutColumn.css";

export const cardLayoutColumnApi = (props: ColumnProps) => {
  const propsWithDefaults: Required<ColumnProps> = {
    ...columnDefaults,
    ...props,
  };
  return {
    root: getColumnRootElement(propsWithDefaults),
    padding: getColumnPaddingElement(),
  } satisfies ApiComponent;
};

const getColumnRootElement = ({
  modernCss,
  columnAspectRatio,
  span,
}: Required<ColumnProps>): ApiHtmlElement => {
  if (modernCss) {
    return {
      className: clsx({
        [columnClassNames.span1]: span === 1,
        [columnClassNames.span2]: span === 2,
        [columnClassNames.span3]: span === 3,
        [columnClassNames.span4]: span === 4,
        [columnClassNames.span5]: span === 5,
        [columnClassNames.span6]: span === 6,
        [columnClassNames.span7]: span === 7,
        [columnClassNames.span8]: span === 8,
        [columnClassNames.span9]: span === 9,
        [columnClassNames.span10]: span === 10,
        [columnClassNames.span11]: span === 11,
        [columnClassNames.span12]: span === 12,
      }),
      style:
        columnAspectRatio !== undefined
          ? { [variables.aspectRatioVar as string]: columnAspectRatio }
          : undefined,
    };
  }

  return {
    className: columnClassNames.modifierForLegacyBrowsers,
    style: columnAspectRatio
      ? { [variables.aspectRatioVar as string]: columnAspectRatio }
      : undefined,
  };
};

const getColumnPaddingElement = () => {
  return {
    className: columnClassNames.padding,
  };
};
