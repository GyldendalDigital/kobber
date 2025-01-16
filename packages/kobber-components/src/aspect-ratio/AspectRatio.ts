import { CSSResultGroup, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StyledLitElement } from "../utils/StyledLitElement";
import {
  ResponsiveCssValue,
  responsiveValueConverter as converter,
  mapResponsiveCssValue,
} from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

export const defaultAspectRatio = "16/9";

@customElement("kobber-aspect-ratio")
export class AspectRatio extends StyledLitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      position: relative;
    }

    .absolute {
      display: grid;
      position: absolute;
      inset: 0;
    }
  `;

  @property({ converter, attribute: "aspect-ratio" })
  aspectRatio: ResponsiveCssValue = defaultAspectRatio;

  cssAspectRatioToPadding(ratioValue: string) {
    const [width, height] = ratioValue.split("/").map(string => string.trim());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    if (import.meta.env.DEV) {
      if (width === "" || height === "") {
        console.error(
          "Ratio must be in the format of x/y where x and y are valid css values.",
          ratioValue,
          "is not valid.",
        );
        return `calc(${defaultAspectRatio} * 100%)`;
      }
    }
    return `calc((${height} / ${width}) * 100%)`;
  }

  render() {
    const paddingValues = mapResponsiveCssValue(this.aspectRatio, ratioValue =>
      this.cssAspectRatioToPadding(ratioValue),
    );

     
    const { aspectRatio, ...styles } = this.getStyles({
      paddingTop: paddingValues,
    });
    const hostStyles = stringifyStyleObject(":host", styles);
    return html`
      <style>
        ${hostStyles}
      </style>
      <div class="absolute">
        <slot />
      </div>
    `;
  }
}
