import { consume } from "@lit/context";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { Button } from "../button/Button";
import { Context, context, defaultContext } from "./Carousel.context";
import { customElement } from "../base/utilities/customElementDecorator";

@customElement("kobber-carousel-button")
export class CarouselButton extends Button {
  @consume({ context, subscribe: true })
  protected context: Context = defaultContext;

  private _getSettings() {
    const className = this.getAttribute("class");

    const ariaLabel = this.getAttribute("aria-label");

    const hasChildren = this._hasChildren();

    return this.slot === "previous-button"
      ? {
          className: className ?? "button button--previous",
          onClick: () => this.context.previous(),
          children: hasChildren ? undefined : html`<kobber-arrow_left slot="icon" />`,
          enabled: this.context.previousIsEnabled,
          ariaLabel: ariaLabel ?? "Forrige",
        }
      : {
          className: className ?? "button button--next",
          onClick: () => this.context.next(),
          children: hasChildren ? undefined : html`<kobber-arrow_right slot="icon" />`,
          enabled: this.context.nextIsEnabled,
          ariaLabel: ariaLabel ?? "Neste",
        };
  }

  private _hasChildren() {
    const assignedNodes = this.shadowRoot?.querySelector("slot")?.assignedNodes();
    return assignedNodes && assignedNodes.length > 0;
  }

  render = () => {
    const { className, onClick, children, enabled, ariaLabel } = this._getSettings();
    return html`
      <kobber-button
        aria-label=${ariaLabel}
        class=${className}
        @click="${(event: PointerEvent) => {
          this.onclick?.(event);
          onClick();
        }}"
        ?disabled=${this.disabled || !enabled}
        variant=${ifDefined(this.variant)}
      >
        <slot></slot>
        ${children}
      </kobber-button>
    `;
  };
}
