import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cardContext, genericContext, machineContext } from "./core";
import { consume } from "@lit/context";

interface TestingDepth {
  bool?: boolean;
  someOtherValue?: any;
}

@customElement("kobber-card-text")
export class KobberCardText extends LitElement {
  // @consume({ context: cardContext, subscribe: true })
  // source: any;

  @consume({ context: machineContext })
  machine: any;

  // @consume({ context: genericContext, subscribe: true })
  // active: boolean = false;

  @consume({ context: genericContext, subscribe: true })
  depth: TestingDepth = { bool: false };

  override render() {
    //console.log(this.active);
    return html`<div>Active single-value:</div>
      <div>Deep value: ${this.depth.bool}</div>
      <div>Some other value: ${this.depth.someOtherValue.active}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kobber-card-text": KobberCardText;
  }
}
