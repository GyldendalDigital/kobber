/**
 * Kobber Dice web-component
 */

import { customElement, property, state } from "lit/decorators.js";
import { diceName, DiceProps } from "./Dice.core";
import { CSSResultGroup, html, LitElement } from "lit";

@customElement(diceName)
export class Dice extends LitElement implements DiceProps {
  static styles: CSSResultGroup = [];

  @property({ type: Number })
  value: number = 3;

  @property({ type: String })
  theme: string = "light";

  @state()
  private label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    this.label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
  }

  render() {
    return html`<div></div>`;
  }
}
