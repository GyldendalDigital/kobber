import { html, LitElement } from "lit";
import type { CoreComponent } from "./types.js";

export class LitComponent<P> extends LitElement {
  protected coreInstance: CoreComponent<P> | undefined;

  override connectedCallback() {
    super.connectedCallback();
    this.coreInstance?.onMount?.();
    this.rerenderOnPropsChange();
  }

  private rerenderOnPropsChange() {
    const observer = new MutationObserver(() => {
      this.requestUpdate();
    });
    observer.observe(this, { attributes: true });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.coreInstance?.onUnmount?.();
  }

  render() {
    if (!this.coreInstance) {
      throw new Error("Missing core component instance");
    }
    console.log("this", this);
    const props = htmlAttributesToProps<P>(this.attributes);
    return this.coreInstance.render({
      ...props,
      children: html`<slot></slot>`,
    });
  }
}

const htmlAttributesToProps = <P>(attributes: NamedNodeMap): P => {
  const props: Partial<P> = {};
  for (const attribute of attributes) {
    const propertyName = kebabToCamel(attribute.name) as keyof Partial<P>;
    if (typeof propertyName === "string") {
      // @ts-expect-error Cannot assign read-only property
      props[propertyName] = attribute.value;
    }
  }
  return props as P;
};

const kebabToCamel = (str: string) => str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
