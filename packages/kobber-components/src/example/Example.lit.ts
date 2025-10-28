import type { CoreComponent } from "@gyldendal/kobber-core-component/types";
import { html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement } from "../base/utilities/customElementDecorator.js";
import { createExampleCore, type ExampleProps } from "./Example.core.js";

@customElement("kobber-example")
export class Example extends LitElement {
  private coreInstance: CoreComponent<ExampleProps>;

  constructor() {
    super();
    this.coreInstance = createExampleCore<ExampleProps>();
  }

  render() {
    const props = htmlAttributesToProps(this.attributes);
    const htmlString = this.coreInstance.render(props);
    return html`${unsafeHTML(htmlString)}`;
  }
}

const htmlAttributesToProps = (attributes: NamedNodeMap): ExampleProps => {
  const props: Partial<ExampleProps> = {};
  for (const attribute of attributes) {
    const propertyName = kebabToCamel(attribute.name) as keyof Partial<ExampleProps>;
    if (typeof propertyName === "string") {
      // @ts-expect-error Cannot assign read-only property
      props[propertyName] = attribute.value;
    }
  }
  return props as ExampleProps;
};

const kebabToCamel = (str: string) => str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
