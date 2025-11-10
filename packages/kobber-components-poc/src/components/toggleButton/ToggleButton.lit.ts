import { Component, normalizeProps, VanillaMachine } from "@gyldendal/kobber-components-core/lit";
import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { spread } from "@open-wc/lit-helpers";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getClassNames } from "./core";

@customElement("kobber-toggle-button")
export class ToggleButton extends Component<toggleButton.Api> {
  initMachine() {
    return new VanillaMachine(toggleButton.machine, { id: this.id, multiple: true });
  }

  initApi() {
    return toggleButton.connect(this.machine.service, normalizeProps);
  }

  override render() {
    const classNames = getClassNames(this.api);
    return html`
      <button ${spread(this.api.getButtonProps())} class="${classNames.root}">
        <slot></slot>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kobber-toggle-button": ToggleButton;
  }
}
