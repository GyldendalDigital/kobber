import { spread } from "@open-wc/lit-helpers";
import { html } from "lit";
import { Component, normalizeProps, VanillaMachine } from "../../../core/zagFormats/lit";
import { toggleButtonApi } from "../index.api";
import * as stateMachine from "../state/toggleButton";

export class ToggleButton extends Component<stateMachine.Api> {
  initMachine() {
    return new VanillaMachine(stateMachine.machine, { id: this.id, multiple: true });
  }

  initApi() {
    return stateMachine.connect(this.machine.service, normalizeProps);
  }

  override render() {
    const api = toggleButtonApi({ isActive: this.api.active });
    return html`
      <button ${spread(this.api.getButtonProps())} class="${api.root.className}">
        <slot></slot>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kobber-toggle-button": ToggleButton;
  }
}
