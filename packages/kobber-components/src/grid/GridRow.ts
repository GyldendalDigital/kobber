import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { toCss } from "../utils/toCss";
import { largeViewport, mediumViewport, smallViewport } from "./mediaQueries";

@customElement("kobber-grid-row")
export class GridRow extends LitElement {
  static styles = css`
    :host {
      display: grid;
      gap: ${unsafeCSS(layout.gap["4-16"])};
      padding: ${unsafeCSS(layout.gap["4-16"])};
      width: 100%;
      max-width: ${layout.maxWidth / 16}rem;
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

  @property({ type: String })
  gridAutoColumns?: string;

  @property({ type: String })
  gridAutoFlow?: string;

  @property({ type: String })
  gridAutoRows?: string;

  @property({ type: String })
  gridTemplateAreas?: string;

  @property({ type: String })
  gridTemplateColumns?: string;

  @property({ type: String })
  gridTemplateRows?: string;

  @property({ type: String })
  alignContent?: string;

  @property({ type: String })
  justifyContent?: string;

  @property({ type: String })
  gap?: string;

  @property({ type: String })
  justifyItems?: string;

  @property({ type: String })
  alignItems?: string;

  @property({ type: String })
  padding?: string;

  styles = () => ({
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
    padding: this.padding,
  });

  render() {
    return html`
      <style>
        :host {
          ${toCss(this.styles())}
        }
      </style>
      <slot />
    `;
  }
}
