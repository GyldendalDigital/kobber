import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";

/** Vanilla web component.
 *
 * TODO:
 * - contrast valid text color based on background color
 * - theme support
 */
export class Badge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const fontSize = `${tokens.typography.action.button.fontSize / 16}rem;`;
    const customColor =
      this.getAttribute("color") ?? tokens.component.badge.color.background;

    this.shadowRoot.innerHTML = `
     <style>
       :host {
        padding: ${tokens.component.badge.padding.top}px ${tokens.component.badge.padding.right}px;
        font-size: ${fontSize};
        font-family: ${tokens.typography.action.button.fontFamily};
        font-weight: ${tokens.typography.action.button.fontWeight};
        border-radius: ${tokens.component.button.border.radius}px;
        color: ${tokens.component.badge.color.foreground};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${tokens.component.badge.padding.gap}px;

        ${this.getAttribute("type") == "category" ? `background-color: ${customColor};` : ""}
       }

       .circle {
          display: inline-block;
          width: ${fontSize};
          height: ${fontSize};
          border-radius: 50%;
          background-color: ${customColor};
       }
     </style>
     ${this.getAttribute("type") == "subject" ? "<span class=circle></span>" : ""}
     <slot></slot>
   `;
  }
}

export const customElementName = "kobber-badge";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, Badge);
}
