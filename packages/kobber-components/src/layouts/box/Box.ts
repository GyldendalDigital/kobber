import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { contentMaxWidth, headerMaxWidth } from "../tokens";

const maxWidths = {
  header: headerMaxWidth,
  content: contentMaxWidth,
};

@customElement("kobber-box")
export class Box extends LitElement {
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

    .box.max-width-header {
      max-width: ${maxWidths.header / 16}rem;
    }

    .box.max-width-content {
      max-width: ${maxWidths.content / 16}rem;
    }
  `;

  @property({ attribute: "max-width" })
  maxWidth?: string = "";

  private _getBoxClassName = () => {
    const maxWidth = this.maxWidth;
    if (maxWidth === undefined || !Object.keys(maxWidths).includes(maxWidth)) {
      console.error(`max-width "${this.maxWidth}" is not valid`);
    }
    return `max-width-${maxWidth}`;
  };

  render = () =>
    html`<div class="box ${this._getBoxClassName()}">
      <slot />
    </div>`;
}
