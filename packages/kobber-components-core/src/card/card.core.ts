// Shared code between the formats go here.
export interface CardProps {
  layout?: "horizontal" | "vertical";
}

export type CardContext = {
  api: () => any;
  link: HTMLAnchorElement | null;
  registerLink: (link: HTMLAnchorElement | null) => void;
  direction: "vertical" | "horizontal";
};
