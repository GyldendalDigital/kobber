export interface ApiHtmlElement {
  className?: string;
  style?: Record<string, string | number>;

  // More stuff can be added here if needed in the future.
  // For example aria-attributes.
  // It could also expose a subset of tokens if needed
  // - Example: { tokens: tokens.components.toggleButton }
}

// Represents a component (e.g. a React component) with one or more HTML elements

export type ApiComponent = Record<string, ApiHtmlElement>;
