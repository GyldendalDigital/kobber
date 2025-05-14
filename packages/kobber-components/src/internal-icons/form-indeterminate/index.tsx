import { CSSResultGroup } from "lit";
import { html } from "lit/static-html.js";
import { customElement } from "lit/decorators.js";
import { internalIconsStyles } from "../InternalIcons.styles";

@customElement("icon-form_indeterminate")
export class IconFormIndeterminate extends HTMLElement {
  static styles: CSSResultGroup = [internalIconsStyles];

  render() {
    return html` <svg viewBox="0 0 20 20" aria-hidden role="presentation">
      <path d="M6 10H14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
    </svg>`;
  }
}
