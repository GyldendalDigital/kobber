import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StyledLitElement } from "../../utils/StyledLitElement";
import { contentMaxWidth, fixedPageHeaderMaxWidth } from "../tokens";

const validMaxWidths = ["fixedPageHeader", "content"];

@customElement("kobber-box")
export class Box extends StyledLitElement {
  static styles = css`
    :host {
      display: grid;
      width: 100%;
      justify-items: center;
      padding: ${unsafeCSS(layout.gap["16-32"])};
    }

    .box {
      width: 100%;
    }

    .box.max-width-fixed-page-header {
      max-width: ${fixedPageHeaderMaxWidth / 16}rem;
    }

    .box.max-width-content {
      max-width: ${contentMaxWidth / 16}rem;
    }
  `;

  @property({ attribute: "max-width" })
  maxWidth?: string = "";

  private _getBoxClassName = () => {
    const maxWidth = this.maxWidth;
    if (maxWidth === undefined || !validMaxWidths.includes(maxWidth)) {
      console.error(`max-width "${this.maxWidth}" is not valid`);
    }
    return `max-width-${maxWidth}`;
  };

  render = () =>
    html`<div class="box ${this._getBoxClassName()}">
      <slot />
    </div>`;
}
