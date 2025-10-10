import { css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import { StyledLitElement } from "../../base/utilities/StyledLitElement";
import { stringifyStyleObject } from "../../base/utilities/stringifyStyleObject";

const validMaxWidths = ["fixed-page-header", "content"];

const layout = {
  contentMaxWidth: 1344,
  fixedPageHeaderMaxWidth: 1472,
  gap: { "16-32": "clamp(1rem, calc(0.75rem + 1.25vw), 2rem)" },
};

@customElement("kobber-box-layout")
export class BoxLayout extends StyledLitElement {
  private _getDefaultStyles = () => css`
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
      max-width: ${layout.fixedPageHeaderMaxWidth / 16}rem;
    }

    .box.max-width-content {
      max-width: ${layout.contentMaxWidth / 16}rem;
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
    html`<style>
        ${this._getDefaultStyles()}
        ${stringifyStyleObject(":host", this.getStyles())}
      </style>
      <div class="box ${this._getBoxClassName()}">
        <slot />
      </div>`;
}
