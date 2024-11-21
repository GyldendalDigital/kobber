import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StyledLitElement } from "../../utils/StyledLitElement";
import { stringifyStyleObject } from "../../utils/stringifyStyleObject";

export enum ValidMaxWidths {
  FixedPageHeader = "fixed-page-header",
  Content = "content",
}

const validMaxWidths = [ValidMaxWidths.FixedPageHeader, ValidMaxWidths.Content];

@customElement("kobber-box-layout")
export class BoxLayout extends StyledLitElement {
  private _getDefaultStyles = () => css`
    :host {
      box-sizing: border-box;
      display: grid;
      width: 100%;
      justify-items: center;
      padding: ${unsafeCSS(layout.gap["16-32"])};
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
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
    if (maxWidth === undefined || !validMaxWidths.includes(maxWidth as ValidMaxWidths)) {
      console.error(`max-width "${this.maxWidth}" is not valid`);
    }
    return `max-width-${maxWidth}`;
  };

  render = () => {
    const { maxWidth, ...styles } = this.getStyles();
    return html`<style>
        ${this._getDefaultStyles()}
        ${stringifyStyleObject(":host", styles)}
      </style>
      <div class="box ${this._getBoxClassName()}">
        <slot />
      </div>`;
  };
}
