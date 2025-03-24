/**
 * Kobber Dice web-component
 */

import { customElement, property, state } from "lit/decorators.js";
import { reviewName, ReviewProps } from "./Review.core";
import { CSSResultGroup, html, LitElement } from "lit";

@customElement(reviewName)
export class Dice extends LitElement implements ReviewProps {
  static styles: CSSResultGroup = [];

  @property({ type: Number })
  value: number = 3;

  @property({ type: String })
  theme: ReviewProps["theme"] = "natural";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<div></div>`;
  }
}
