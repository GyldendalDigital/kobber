import type { Decorator } from "@storybook/react";
import type { ReactElement } from "react";
import { createRoot } from "react-dom/client";

// Enables react stories in web component storybook

export const reactDecorator: Decorator = (Story) => {
  const element = document.createElement("div");
  createRoot(element).render(<Story />);
  return element as unknown as ReactElement;
};
