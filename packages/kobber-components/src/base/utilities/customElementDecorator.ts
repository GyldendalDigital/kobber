// Partially copied from https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
//
// When importing the same component in multiple JavaScript bundles or when reloading JavaScript during hot module reloading,
// the following error might be thrown:
// Failed to execute 'define' on 'CustomElementRegistry': the name "kobber-button" has already been used with this registry
//
// This decorator prevents browsers and node.js from crashing if a custom element is already defined.

import type { CustomElementDecorator } from "lit/decorators.js";

type CustomElementClass = Omit<typeof HTMLElement, "new">;

export const customElement =
  (tagName: string): CustomElementDecorator =>
  (classOrTarget: CustomElementClass, context?: ClassDecoratorContext) => {
    const existing = customElements.get(tagName);
    if (existing) {
      console.warn(`The element ${tagName} is already defined. You may need to reload to see changes.`);
    } else {
      if (context !== undefined) {
        context.addInitializer(() => {
          customElements.define(tagName, classOrTarget as CustomElementConstructor);
        });
      } else {
        customElements.define(tagName, classOrTarget as CustomElementConstructor);
      }
    }
  };
