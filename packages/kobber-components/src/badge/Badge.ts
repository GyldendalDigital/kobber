import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { getContrastCompliantColors } from "../utils/contrast";
import { isValidColor } from "../utils/color";

/**
 * Badges are compact elements that are used to display a small amount of information,
 * such as a number or a status indicator.
 *
 * @todo theme support
 */
export class Badge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const fontSize = `${tokens.typography.actionitems.button.fontSize / 16}rem;`;
    const textColor =
      this.getAttribute("text-color") ?? tokens.component.button.text.color.aubergine.main.primary.fallback;
    const backgroundColor =
      this.getAttribute("background-color") ??
      tokens.component.button.background.color.primary.aubergine.main.primary.fallback;
    const circleColor = this.getAttribute("circle-color");

    const compliantColors = getContrastCompliantColors({
      backgroundColor,
      textColor,
    });

    this.shadowRoot!.innerHTML = `
     <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: ${tokens.component.button.container.gap}px;
          padding: ${tokens.component.button.container.padding.block}px ${tokens.component.button.container.padding.inline}px;
          font-size: ${fontSize};
          font-family: ${tokens.typography.actionitems.button.fontFamily};
          font-weight: ${tokens.typography.actionitems.button.fontWeight};
          border-radius: ${10}px;
          color: ${compliantColors.textColor};
          background-color: ${compliantColors.backgroundColor};
        }
       
        .circle {
          display: inline-block;
          width: ${fontSize};
          height: ${fontSize};
          border-radius: 50%;
          background-color: ${circleColor};
        }
     </style>
     ${circleColor && isValidColor(circleColor) ? "<span class=circle></span>" : ""}
     <slot></slot>
   `;
  }
}

export const customElementName = "kobber-badge";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, Badge);
}
