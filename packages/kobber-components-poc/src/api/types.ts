interface ApiElement {
  className?: string;
  style?: Record<string, string>;

  // More stuff can be added here if needed in the future.
  // For example aria-attributes.
  // It could also expose a subset of tokens if needed
  // - Example: { tokens: tokens.components.toggleButton }
}

export type Api = Record<string, ApiElement>;
