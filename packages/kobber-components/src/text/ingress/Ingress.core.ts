import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const ingressTokens = universal.text;

export const ingressName = "kobber-ingress";

export type IngressProps = {
  size?: IngressSize;
};

export type IngressSize = keyof typeof ingressTokens.primary.size.title;

export const ingressSizes = ["medium", "small"] satisfies (keyof typeof ingressTokens.primary.size.title)[];
