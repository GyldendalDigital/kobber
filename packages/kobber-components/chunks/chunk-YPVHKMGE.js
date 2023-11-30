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
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";
var Grid = class extends LitElement {
  render() {
    return html`<slot /> `;
  }
};
Grid.styles = css`
    :host {
      display: grid;
      max-width: ${unsafeCSS(layout.maxWidth)};
      justify-items: center;
    }
  `;
Grid = __decorateClass([
  customElement("kobber-grid")
], Grid);

// src/grid/GridColumn.ts
import { LitElement as LitElement2, css as css2, html as html2, unsafeCSS as unsafeCSS2 } from "lit";
import { customElement as customElement2, property } from "lit/decorators.js";
import { layout as layout2 } from "@gyldendal/kobber-base/themes/default/tokens.json";
var GridColumn = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.span = 1;
  }
  render() {
    return html2`
      <style>
        :host {
          grid-column: span ${this.span};
          align-self: ${this.alignSelf};
          justify-self: ${this.justifySelf};
        }
      </style>
      <slot />
    `;
  }
};
GridColumn.styles = css2`
    :host {
      display: block;
      max-width: ${unsafeCSS2(layout2.maxWidth)};
    }
  `;
__decorateClass([
  property({ type: Number })
], GridColumn.prototype, "span", 2);
__decorateClass([
  property({ type: String })
], GridColumn.prototype, "alignSelf", 2);
__decorateClass([
  property({ type: String })
], GridColumn.prototype, "justifySelf", 2);
GridColumn = __decorateClass([
  customElement2("kobber-grid-column")
], GridColumn);

// src/grid/GridRow.ts
import { layout as layout4 } from "@gyldendal/kobber-base/themes/default/tokens.json";
import { LitElement as LitElement3, css as css4, html as html3, unsafeCSS as unsafeCSS3 } from "lit";
import { customElement as customElement3, property as property2 } from "lit/decorators.js";

// src/utils/toCss.ts
var toCss = (styleInfo) => {
  return Object.keys(styleInfo).reduce((style, prop) => {
    const value = styleInfo[prop];
    if (value == null) {
      return style;
    }
    prop = prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
    return style + `${prop}:${value};`;
  }, "");
};

// src/grid/mediaQueries.ts
import { css as css3 } from "lit";
import { layout as layout3 } from "@gyldendal/kobber-base/themes/default/tokens.json";
var { viewportWidth } = layout3;
var smallViewport = css3`(max-width: ${viewportWidth.small.max}px)`;
var mediumViewport = css3`(min-width: ${viewportWidth.medium.min}px) and (max-width: ${viewportWidth.medium.max}px)`;
var largeViewport = css3`(min-width: ${viewportWidth.large.min}px)`;

// src/grid/GridRow.ts
var GridRow = class extends LitElement3 {
  constructor() {
    super(...arguments);
    this.styles = () => ({
      gridAutoColumns: this.gridAutoColumns,
      gridAutoFlow: this.gridAutoFlow,
      gridAutoRows: this.gridAutoRows,
      gridTemplateAreas: this.gridTemplateAreas,
      gridTemplateColumns: this.gridTemplateColumns,
      gridTemplateRows: this.gridTemplateRows,
      alignContent: this.alignContent,
      justifyContent: this.justifyContent,
      gap: this.gap,
      justifyItems: this.justifyItems,
      alignItems: this.alignItems,
      padding: this.padding
    });
  }
  render() {
    return html3`
      <style>
        :host {
          ${toCss(this.styles())}
        }
      </style>
      <slot />
    `;
  }
};
GridRow.styles = css4`
    :host {
      display: grid;
      gap: ${unsafeCSS3(layout4.gap["4-16"])};
      padding: ${unsafeCSS3(layout4.gap["4-16"])};
      width: 100%;
      max-width: ${layout4.maxWidth / 16}rem;
    }

    @media ${smallViewport} {
      :host {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media ${mediumViewport} {
      :host {
        grid-template-columns: repeat(6, 1fr);
      }
    }

    @media ${largeViewport} {
      :host {
        grid-template-columns: repeat(12, 1fr);
      }
    }
  `;
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridAutoColumns", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridAutoFlow", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridAutoRows", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridTemplateAreas", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridTemplateColumns", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gridTemplateRows", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "alignContent", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "justifyContent", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "gap", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "justifyItems", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "alignItems", 2);
__decorateClass([
  property2({ type: String })
], GridRow.prototype, "padding", 2);
GridRow = __decorateClass([
  customElement3("kobber-grid-row")
], GridRow);

export {
  propNames,
  Example,
  propNames2,
  ProgressBar,
  propNames3,
  ProficiencyBar,
  Grid,
  GridColumn,
  GridRow
};
