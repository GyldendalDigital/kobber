import { layout } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { CSSResultGroup, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid-column")
export class GridColumn extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      max-width: ${unsafeCSS(layout.maxWidth)}px;
    }
  `;

  @property({ converter })
  span?: number | string = 1;

  @property({ converter, attribute: "grid-area" })
  gridArea?: ResponsiveCssValue;

  @property({ converter, attribute: "align-self" })
  alignSelf?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-self" })
  justifySelf?: ResponsiveCssValue;

  styles = () => ({
    gridArea: this.gridArea,
    gridColumn: `span ${this.span}`,
    alignSelf: this.alignSelf,
    justifySelf: this.justifySelf,
  });

  render() {
    const css = stringifyStyleObject(":host", this.styles());
    return html`
      <style>
        ${css}
      </style>
      <slot />
    `;
  }
}
