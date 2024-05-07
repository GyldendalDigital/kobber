import { layout } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { consume } from "@lit/context";
import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./context";
import { gridConfigs } from "./gridConfig";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid-column")
export class GridColumn extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
    }
  `;

  @consume({ context, subscribe: true })
  protected context: Context = defaultContext;

  @property({ converter })
  span?: ResponsiveCssValue | number | string = 1;

  @property({ converter, attribute: "grid-column" })
  gridColumn?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-area" })
  gridArea?: ResponsiveCssValue;

  @property({ converter, attribute: "max-width" })
  maxWidth?: ResponsiveCssValue = `${layout.maxWidth}px`;

  @property({ converter, attribute: "align-self" })
  alignSelf?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-self" })
  justifySelf?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-top" })
  paddingTop?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-right" })
  paddingRight?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-bottom" })
  paddingBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-left" })
  paddingLeft?: ResponsiveCssValue;

  protected getStyles = () =>
    stringifyStyleObject(":host", {
      maxWidth: this.maxWidth,
      gridArea: this.gridArea,
      alignSelf: this.alignSelf,
      justifySelf: this.justifySelf,
    });

  protected getPaddingStyles = (selector: string = ":host") =>
    stringifyStyleObject(selector, {
      paddingTop: this.paddingTop,
      paddingRight: this.paddingRight,
      paddingBottom: this.paddingBottom,
      paddingLeft: this.paddingLeft,
    });

  protected getGridColumnStyles = () => stringifyStyleObject(":host", { gridColumn: spanToGridColumn(this.span) });

  protected getConfigStyles = () => stringifyStyleObject(":host", this.getStylesFromConfig());

  protected getStylesFromConfig() {
    const styles = this.context.config ? gridConfigs[this.context.config].gridColumnStyles : undefined;
    if (!styles) return {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { paddingTop, paddingRight, paddingBottom, paddingLeft, ...rest } = styles;
    return rest;
  }

  protected getPaddingStylesFromConfig(selector: string = ":host") {
    const styles = this.context.config ? gridConfigs[this.context.config].gridColumnStyles : undefined;
    if (!styles) return {};
    const { paddingTop, paddingRight, paddingBottom, paddingLeft } = styles;
    return stringifyStyleObject(selector, { paddingTop, paddingRight, paddingBottom, paddingLeft });
  }

  render() {
    return html`
      <style>
        ${this.getGridColumnStyles()}
        ${this.getStyles()}
        ${this.getPaddingStyles()}
        ${this.getConfigStyles()}
        ${this.getPaddingStylesFromConfig()}
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
