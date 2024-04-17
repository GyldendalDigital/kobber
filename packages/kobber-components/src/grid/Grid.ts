import { layout, mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid")
export class Grid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      width: 100%;
      justify-items: center;
    }

    .grid {
      display: grid;
      width: 100%;
      min-width: 0;
      max-width: ${layout.maxWidth / 16}rem;
    }
  `;

  @property({ converter, attribute: "grid-template" })
  gridTemplate?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-columns" })
  gridAutoColumns?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-flow" })
  gridAutoFlow?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-rows" })
  gridAutoRows?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-areas" })
  gridTemplateAreas?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-columns" })
  gridTemplateColumns?: ResponsiveCssValue = {
    [mediaQuery.small]: "repeat(4, 1fr)",
    [mediaQuery.medium]: "repeat(6, 1fr)",
    [mediaQuery.large]: "repeat(12, 1fr)",
  };

  @property({ converter, attribute: "grid-template-rows" })
  gridTemplateRows?: ResponsiveCssValue;

  @property({ converter, attribute: "align-conent" })
  alignContent?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-content" })
  justifyContent?: ResponsiveCssValue;

  @property({ converter, attribute: "gap" })
  gap?: ResponsiveCssValue = layout.gap["8-16"];

  @property({ converter, attribute: "justify-items" })
  justifyItems?: ResponsiveCssValue;

  @property({ converter, attribute: "align-items" })
  alignItems?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-top" })
  paddingTop?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-right" })
  paddingRight?: ResponsiveCssValue = layout.gap["16-32"];

  @property({ converter, attribute: "padding-bottom" })
  paddingBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-left" })
  paddingLeft?: ResponsiveCssValue = layout.gap["16-32"];

  hostStyles = () => ({
    paddingTop: this.paddingTop,
    paddingRight: this.paddingRight,
    paddingBottom: this.paddingBottom,
    paddingLeft: this.paddingLeft,
  });

  gridStyles = () => ({
    gridTemplate: this.gridTemplate,
    gridAutoColumns: this.gridAutoColumns,
    gridAutoFlow: this.gridAutoFlow,
    gridAutoRows: this.gridAutoRows,
    gridTemplateColumns: this.gridTemplateColumns,
    gridTemplateAreas: this.gridTemplateAreas,
    gridTemplateRows: this.gridTemplateRows,
    alignContent: this.alignContent,
    justifyContent: this.justifyContent,
    gap: this.gap,
    justifyItems: this.justifyItems,
    alignItems: this.alignItems,
  });

  render() {
    const hostStyles = stringifyStyleObject(":host", this.hostStyles());
    const gridStyles = stringifyStyleObject(".grid", this.gridStyles());
    return html`
      <style>
        ${hostStyles}
        ${gridStyles}
      </style>
      <div class="grid">
        <slot />
      </div>
    `;
  }
}
