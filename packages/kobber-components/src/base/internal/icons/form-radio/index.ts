import { CSSResultGroup, LitElement } from "lit";
import { html } from "lit/static-html.js";
import { internalIconsStyles } from "../InternalIcons.styles";
import { customElement } from "../../../utilities/customElementDecorator";

export const iconFormRadioName = "icon-form_radio";

@customElement(iconFormRadioName)
export class IconFormRadio extends LitElement {
  static styles: CSSResultGroup = [internalIconsStyles];

  constructor() {
    super();
  }

  render() {
    return html`<svg viewBox="0 0 10 11" aria-hidden role="presentation">
      <circle cx="5" cy="5.5" r="5" fill="currentColor" />
    </svg>`;
  }
}
