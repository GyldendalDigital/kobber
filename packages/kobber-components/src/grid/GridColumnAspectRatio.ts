import { CSSResultGroup, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { GridColumn } from "./GridColumn";
import { gridConfigs } from "./gridConfig";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid-column-aspect-ratio")
export class GridColumnAspectRatio extends GridColumn {
  static styles: CSSResultGroup = css`
    :host {
      display: grid;
    }

    .padding {
      display: grid;
    }
  `;

  @property()
  ["--span"]?: ResponsiveCssValue;

  @property({ converter, attribute: "aspect-ratio" })
  aspectRatio?: ResponsiveCssValue;

  private getAspectRatioStyles = () =>
    stringifyStyleObject(":host", {
      aspectRatio: this.getAspectRatio(),
      ["--span"]: this.span ? this.span.toString() : "1",
    });

  private getAspectRatio() {
    const stylesFromConfig = this.context.config
      ? gridConfigs[this.context.config].gridColumnAspectRatioStyles
      : undefined;
    const aspectRatio = stylesFromConfig?.aspectRatio ?? this.aspectRatio;
    return aspectRatio;
  }

  render() {
    return html`
      <style>
        ${this.getGridColumnStyles()}
        ${this.getStyles()}
        ${this.getPaddingStyles(".padding")}
        ${this.getConfigStyles()}
        ${this.getPaddingStylesFromConfig(".padding")}
        ${this.getAspectRatioStyles()}
      </style>
      <div class="padding">
        <slot />
      </div>
    `;
  }
}
