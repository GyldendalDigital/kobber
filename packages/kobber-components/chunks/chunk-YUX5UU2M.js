var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/example/Example.tsx
import tokens from "@gyldendal/kobber-base/themes/default/tokens.json";
import React from "react";

// src/example/example.module.css
var example_module_default = {
  example: "example_module_example"
};

// src/example/Example.tsx
var propNames = {
  backgroundColor: "string",
  message: "string"
};
var Example = ({
  message,
  backgroundColor
}) => /* @__PURE__ */ React.createElement(
  "div",
  {
    className: example_module_default.example,
    style: {
      backgroundColor,
      padding: tokens.primitives.size[16],
      border: `solid 1px ${tokens.primitives.color.gray[800]}`
    }
  },
  message
);

// src/progress-bar/ProgressBar.tsx
import React3 from "react";

// src/progress-bar/ProgressBar.module.css
var ProgressBar_module_default = {
  list: "ProgressBar_module_list",
  low: "ProgressBar_module_low",
  "show-full-length": "ProgressBar_module_show-full-length"
};

// src/progress-bar/ProgressBarItem.tsx
import React2 from "react";

// src/progress-bar/progressBarItem.module.css
var progressBarItem_module_default = {
  item: "progressBarItem_module_item",
  fill: "progressBarItem_module_fill"
};

// src/progress-bar/ProgressBarItem.tsx
var ProgressBarItem = ({
  className = "",
  fillerWidth,
  progressBar
}) => {
  const valueMin = progressBar.valueMin || 0;
  const valueMax = progressBar.valueMax || 100;
  return /* @__PURE__ */ React2.createElement(
    "li",
    {
      className: `${progressBarItem_module_default.item} ${className}`,
      style: {
        "--progress-bar-item-width": `${fillerWidth}`
      }
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: progressBarItem_module_default.fill,
        role: "progressbar",
        style: {
          "--progress-bar-fill-color": progressBar.valueNow === valueMax && !!progressBar.filledColorVar ? `var(${progressBar.filledColorVar})` : progressBar.fillColorVar ? `var(${progressBar.fillColorVar})` : "var(--kobber-component-progressbar-color-foreground-default)"
        },
        "aria-valuenow": progressBar.valueNow,
        "aria-valuemin": valueMin,
        "aria-label": progressBar["aria-label"],
        "aria-labelledby": progressBar["aria-labelledby"],
        "aria-valuetext": progressBar.explainOtherUnitThanPercentage,
        "aria-valuemax": valueMax
      }
    )
  );
};

// src/progress-bar/ProgressBar.tsx
var propNames2 = {
  className: "string",
  progressBars: "json",
  showFullLength: "boolean",
  style: "json",
  height: "string"
};
var ProgressBar = ({
  className = "",
  progressBars,
  showFullLength = false,
  style,
  height = "default"
}) => {
  let previousWidths = 0;
  return /* @__PURE__ */ React3.createElement(
    "ol",
    {
      className: `${ProgressBar_module_default.list} ${showFullLength ? ProgressBar_module_default["show-full-length"] : ""} ${height === "low" ? ProgressBar_module_default.low : ""} ${className}`,
      style
    },
    progressBars.map((progressBar, index) => {
      let formerPreviousWidths = 0;
      if (!showFullLength) {
        formerPreviousWidths = previousWidths;
        previousWidths += progressBar.valueNow;
      }
      return /* @__PURE__ */ React3.createElement(
        ProgressBarItem,
        {
          key: index,
          progressBar,
          fillerWidth: progressBar.valueNow - formerPreviousWidths
        }
      );
    })
  );
};

// src/progress-bar/ProficiencyBar.tsx
import React4 from "react";

// src/utils/progressHelpers.ts
var getProficiencyNameByPercentage = (progressInPercent) => {
  if (progressInPercent === 0)
    return "unknown";
  if (progressInPercent < 20)
    return "low";
  if (progressInPercent < 40)
    return "some";
  if (progressInPercent < 60)
    return "basics";
  if (progressInPercent < 80)
    return "good";
  return "high";
};

// src/progress-bar/ProficiencyBar.tsx
var propNames3 = {
  className: "string",
  labelledById: "string",
  progressInPercent: "number",
  style: "json"
};
var ProficiencyBar = ({
  className,
  labelledById,
  progressInPercent,
  style
}) => {
  return /* @__PURE__ */ React4.createElement(
    ProgressBar,
    {
      className,
      style: {
        ...style,
        ...{
          "--progress-bar-background-color": `var(--kobber-component-progressbar-color-background-${getProficiencyNameByPercentage(progressInPercent)})`
        }
      },
      progressBars: [{
        "aria-labelledby": labelledById,
        valueNow: progressInPercent,
        fillColorVar: `--kobber-component-progressbar-color-foreground-${getProficiencyNameByPercentage(progressInPercent)}`
      }]
    }
  );
};

// src/grid/Grid.ts
import {
  layout,
  mediaQuery
} from "@gyldendal/kobber-base/themes/default/tokens.json";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// src/utils/responsiveCssValue.ts
var responsiveValueConverter = {
  fromAttribute: (value) => {
    return value.trim().startsWith("{") ? JSON.parse(value) : value;
  }
};

// src/utils/toCss.ts
import { compile, serialize, stringify } from "stylis";
var isResponsiveValue = (value) => typeof value === "object";
var isStringValue = (value) => typeof value === "string";
var toCss = (selector, styles) => {
  const styleArray = Object.entries(styles);
  const mediaQueries = getMediaQueries(styleArray);
  const css3 = `
    ${selector} {
      ${styleArray.filter(([, value]) => isStringValue(value)).map((aaa) => {
    return aaa;
  }).map(
    ([prop, value]) => value ? `${toCssProp(prop)}: ${value}` : void 0
  ).join(";")}
    }

    ${mediaQueries.map(
    (mediaQuery2) => `
        @media ${mediaQuery2} {
          ${styleArray.map(getDeclarations(mediaQuery2)).map((array) => array ? array.join(";") : "").filter(isValidDeclaration).map((declaration) => `${selector}{ ${declaration} }`).join(";")}
        }`
  ).join("")}

  `;
  const cssString = serialize(compile(css3), stringify);
  return cssString;
};
var getDeclarations = (mediaQuery2) => ([camelCasedCssProp, value]) => {
  const cssProp = toCssProp(camelCasedCssProp);
  if (mediaQuery2 && isResponsiveValue(value)) {
    return Object.entries(value).filter(([nestedMediaQuery]) => nestedMediaQuery === mediaQuery2).map(([, cssValue]) => `${cssProp}: ${cssValue}`);
  } else if (value !== void 0 && mediaQuery2 === void 0) {
    return [`${cssProp}: ${value}`];
  }
};
var isValidDeclaration = (declaration) => declaration !== void 0 && declaration !== "";
var getMediaQueries = (styleArray) => styleArray.reduce((array, [, value]) => {
  if (isResponsiveValue(value)) {
    const unique = Object.keys(value).filter((f) => !array.includes(f));
    return [...array, ...unique];
  }
  return array;
}, []);
var toCssProp = (prop) => prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();

// src/grid/Grid.ts
var Grid = class extends LitElement {
  constructor() {
    super(...arguments);
    this.gridTemplateColumns = {
      [mediaQuery.small]: "repeat(4, 1fr)",
      [mediaQuery.medium]: "repeat(6, 1fr)",
      [mediaQuery.large]: "repeat(12, 1fr)"
    };
    this.gap = layout.gap["4-16"];
    this.paddingRight = layout.gap["8-16"];
    this.paddingLeft = layout.gap["8-16"];
    this.hostStyles = () => ({
      paddingTop: this.paddingTop,
      paddingRight: this.paddingRight,
      paddingBottom: this.paddingBottom,
      paddingLeft: this.paddingLeft
    });
    this.gridStyles = () => ({
      gridTemplate: this.gridTemplate,
      gridAutoColumns: this.gridAutoColumns,
      gridAutoFlow: this.gridAutoFlow,
      gridAutoRows: this.gridAutoRows,
      gridTemplateColumns: this.gridTemplateColumns,
      gridTemplateAreas: this.gridTemplateAreas,
      gridTemplateRows: this.gridTemplateRows,
      alignContent: this.alignContent,
      justifyContent: this.justifyContent,
      gap: this.gap,
      justifyItems: this.justifyItems,
      alignItems: this.alignItems
    });
  }
  render() {
    const hostStyles = toCss(":host", this.hostStyles());
    const gridStyles = toCss(".grid", this.gridStyles());
    return html`
      <style>
        ${hostStyles}
        ${gridStyles}
      </style>
      <div class="grid">
        <slot />
      </div>
    `;
  }
};
Grid.styles = css`
    :host {
      display: grid;
      width: 100%;
      justify-items: center;
    }

    .grid {
      display: grid;
      width: 100%;
      max-width: ${layout.maxWidth / 16}rem;
    }
  `;
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-template" })
], Grid.prototype, "gridTemplate", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-auto-columns" })
], Grid.prototype, "gridAutoColumns", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-auto-flow" })
], Grid.prototype, "gridAutoFlow", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-auto-rows" })
], Grid.prototype, "gridAutoRows", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-template-areas" })
], Grid.prototype, "gridTemplateAreas", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-template-columns" })
], Grid.prototype, "gridTemplateColumns", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "grid-template-rows" })
], Grid.prototype, "gridTemplateRows", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "align-conent" })
], Grid.prototype, "alignContent", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "justify-content" })
], Grid.prototype, "justifyContent", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "gap" })
], Grid.prototype, "gap", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "justify-items" })
], Grid.prototype, "justifyItems", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "align-items" })
], Grid.prototype, "alignItems", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "padding-top" })
], Grid.prototype, "paddingTop", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "padding-right" })
], Grid.prototype, "paddingRight", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "padding-bottom" })
], Grid.prototype, "paddingBottom", 2);
__decorateClass([
  property({ converter: responsiveValueConverter, attribute: "padding-left" })
], Grid.prototype, "paddingLeft", 2);
Grid = __decorateClass([
  customElement("kobber-grid")
], Grid);

// src/grid/GridColumn.ts
import { layout as layout2 } from "@gyldendal/kobber-base/themes/default/tokens.json";
import { LitElement as LitElement2, css as css2, html as html2, unsafeCSS } from "lit";
import { customElement as customElement2, property as property2 } from "lit/decorators.js";
var GridColumn = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.span = 1;
    this.styles = () => ({
      gridArea: this.gridArea,
      gridColumn: `span ${this.span}`,
      alignSelf: this.alignSelf,
      justifySelf: this.justifySelf
    });
  }
  render() {
    const css3 = toCss(":host", this.styles());
    return html2`
      <style>
        ${css3}
      </style>
      <slot />
    `;
  }
};
GridColumn.styles = css2`
    :host {
      display: block;
      max-width: ${unsafeCSS(layout2.maxWidth)};
    }
  `;
__decorateClass([
  property2({ converter: responsiveValueConverter })
], GridColumn.prototype, "span", 2);
__decorateClass([
  property2({ converter: responsiveValueConverter, attribute: "grid-area" })
], GridColumn.prototype, "gridArea", 2);
__decorateClass([
  property2({ converter: responsiveValueConverter, attribute: "align-self" })
], GridColumn.prototype, "alignSelf", 2);
__decorateClass([
  property2({ converter: responsiveValueConverter, attribute: "justify-self" })
], GridColumn.prototype, "justifySelf", 2);
GridColumn = __decorateClass([
  customElement2("kobber-grid-column")
], GridColumn);

export {
  propNames,
  Example,
  propNames2,
  ProgressBar,
  propNames3,
  ProficiencyBar,
  Grid,
  GridColumn
};
