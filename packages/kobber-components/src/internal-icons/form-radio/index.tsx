import { CSSResultGroup } from "lit";
import { html } from "lit/static-html.js";
import { customElement } from "../../utils/customElementDecorator";
import { internalIconsStyles } from "../InternalIcons.styles";

export const iconFormRadioName = "icon-form_radio";

@customElement(iconFormRadioName)
export class IconFormRadio extends HTMLElement {
  static styles: CSSResultGroup = [internalIconsStyles];

  render() {
    return html` <svg viewBox="0 0 20 20" aria-hidden role="presentation">
      <circle cx="5" cy="5.5" r="5" fill="currentColor"></circle>
    </svg>`;
  }
}
