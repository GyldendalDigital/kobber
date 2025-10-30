import { type CSSResultGroup, LitElement } from "lit";
import { html } from "lit/static-html.js";
import { customElement } from "../../../utilities/customElementDecorator";
import { _formIndeterminateIconStyles } from "./index.styles";

export const iconFormIndeterminateName = "icon-form_indeterminate";

@customElement(iconFormIndeterminateName)
export class IconFormIndeterminate extends LitElement {
  static styles: CSSResultGroup = [_formIndeterminateIconStyles];

  render() {
    return html` <svg viewBox="0 0 20 20" aria-hidden role="presentation">
      <path d="M6 10H14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
    </svg>`;
  }
}
