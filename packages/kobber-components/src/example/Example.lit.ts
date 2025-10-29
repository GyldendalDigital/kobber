import { LitComponent } from "@gyldendal/kobber-core-component/LitComponent";
import { customElement } from "../base/utilities/customElementDecorator.js";
import { CoreComponent, type ExampleProps } from "./Example.core.js";

const coreInstance = CoreComponent<ExampleProps>();

@customElement(coreInstance.customElementTagName)
export class Example extends LitComponent<ExampleProps> {
  constructor() {
    super();
    this.coreInstance = coreInstance;
  }
}
