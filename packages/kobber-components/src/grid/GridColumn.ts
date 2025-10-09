import { consume } from "@lit/context";
import { type CSSResultGroup, css, html } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../base/utilities/customElementDecorator";
import {
  responsiveValueConverter as converter,
  type ResponsiveCssValue,
} from "../base/utilities/responsiveCssValue";
import { StyledLitElement } from "../base/utilities/StyledLitElement";
import { stringifyStyleObject } from "../base/utilities/stringifyStyleObject";
import { layout } from "./config/getCardGridBase";
import { type Context, context, defaultContext } from "./Grid.context";

@customElement("kobber-grid-column")
export class GridColumn extends StyledLitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
    }
  `;

  @consume({ context, subscribe: true })
  protected context: Context = defaultContext;

  @property({ converter })
  span?: ResponsiveCssValue | number | string = 1;

  @property({ converter, attribute: "max-width" })
  maxWidth?: ResponsiveCssValue = `${layout.maxWidth}px`;

  protected getGridColumnStyles = () =>
    stringifyStyleObject(":host", { gridColumn: spanToGridColumn(this.span) });

  render() {
    const styles = this.getStyles(this.context.config?.gridColumnProperties);
    const hostStyles = stringifyStyleObject(":host", styles);
    return html`
      <style>
        ${this.getGridColumnStyles()}
        ${hostStyles}
      </style>
      <slot />
    `;
  }
}

const spanToGridColumn = (span?: ResponsiveCssValue | number | string) => {
  if (span === "") {
    return undefined;
  }
  if (!span) {
    return "span 1";
  }
  if (typeof span === "string" || typeof span === "number") {
    return `span ${span}`;
  }
  const gridColumn: ResponsiveCssValue = {};
  Object.entries(span).forEach(([mediaQuery, spanValue]) => {
    gridColumn[mediaQuery] = `span ${spanValue}`;
  });
  return gridColumn;
};
