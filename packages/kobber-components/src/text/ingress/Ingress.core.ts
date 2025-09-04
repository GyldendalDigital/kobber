import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

export const ingressTokens = universal["text-lead"];

export const ingressName = "kobber-ingress";

export type IngressProps = {
  size?: IngressSize;
};

export type IngressSize = (typeof ingressSizes)[number];

export const ingressSizes = ["small", "medium"] as const;
