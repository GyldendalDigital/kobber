import { layout } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { consume } from "@lit/context";
import { CSSResultGroup, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./Grid.context";
import { StyledLitElement } from "../base/utilities/StyledLitElement";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../base/utilities/responsiveCssValue";
import { stringifyStyleObject } from "../base/utilities/stringifyStyleObject";
import { customElement } from "../base/utilities/customElementDecorator";

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

  protected getGridColumnStyles = () => stringifyStyleObject(":host", { gridColumn: spanToGridColumn(this.span) });

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
