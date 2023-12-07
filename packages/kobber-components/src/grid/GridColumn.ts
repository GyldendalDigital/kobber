import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";
import { CSSResultGroup, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  ResponsiveCssValue,
  responsiveValueConverter as converter,
} from "../utils/responsiveCssValue";
import { toCss } from "../utils/toCss";

@customElement("kobber-grid-column")
export class GridColumn extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      max-width: ${unsafeCSS(layout.maxWidth)};
    }
  `;

  @property({ converter })
  span?: number = 1;

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
    const css = toCss(":host", this.styles());
    return html`
      <style>
        ${css}
      </style>
      <slot />
    `;
  }
}
