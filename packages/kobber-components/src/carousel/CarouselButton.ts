import { consume } from "@lit/context";
import { html } from "lit";
import { Button } from "../button/default-button/Button";
import { type Context, context, defaultContext } from "./Carousel.context";
import { customElement } from "../base/utilities/customElementDecorator";
import "@gyldendal/kobber-icons/web-components";

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
      >
        <slot></slot>
        ${children}
      </kobber-button>
    `;
  };
}
