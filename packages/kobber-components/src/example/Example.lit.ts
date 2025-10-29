import { LitComponent } from "@gyldendal/kobber-core-component/LitComponent";
import { unsafeCSS } from "lit";
import { customElement } from "../base/utilities/customElementDecorator.js";
import { CoreComponent, type ExampleProps } from "./Example.core.js";

const coreInstance = CoreComponent<ExampleProps>({ type: "lit" });

@customElement(coreInstance.customElementTagName)
export class Example extends LitComponent<ExampleProps> {
  static styles = [unsafeCSS(coreInstance.styles)];

  constructor() {
    super();
    this.coreInstance = coreInstance;
  }
}
