/**
 * Type guard for narrowing an element's type.
 *
 * @example
 *
 * Example using a native element
 *
 * ```ts
 *
 * if(isElementType<HTMLAnchorElement>(myElement, HTMLAnchorElement)) {
 *   console.log(myElement.href);
 * }
 * ```
 *
 * @example
 *
 * Example using a web component
 *
 * ```ts
 * if(isElementType<MyWebComponent>(myElement, MyWebComponent)) {
 *   console.log(myElement.customProperty);
 * }
 * ```
 */
export const isElementType = <T extends Element>(
  value: Element | undefined | null,
  ElementClass: typeof Element,
): value is T => value?.constructor === ElementClass;
