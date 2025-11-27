// import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
// import { provide } from "@lit/context";
// import { spread } from "@open-wc/lit-helpers";
// import { html } from "lit";
// import { customElement } from "lit/decorators.js";
// import { Component, normalizeProps, VanillaMachine } from "../../../core/zagFormats/lit";
// import { genericContext, getClassNames } from "./core";

// interface TestingDepth {
//   bool?: boolean;
//   someOtherValue?: any;
// }

// @customElement("kobber-card")
// export class KobberCard extends Component<toggleButton.Api> {
//   initMachine() {
//     return new VanillaMachine(toggleButton.machine, {
//       id: this.id,
//       multiple: true,
//     });
//   }

//   initApi() {
//     return toggleButton.connect(this.machine.service, normalizeProps);
//   }

//   @provide({ context: genericContext })
//   depth: TestingDepth = { bool: this.api.active, someOtherValue: "test" };

//   override render() {
//     const classNames = getClassNames(this.api);

//     this.depth = { someOtherValue: this.api };
//     //this.active = this.api.active;

//     return html` <button
//       ${spread(this.api.getButtonProps())}
//       class="${classNames.root}"
//     >
//       <div>${"top level: " + this.api.active}</div>
//       <slot></slot>
//     </button>`;
//   }
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     "kobber-card": KobberCard;
//   }
// }
