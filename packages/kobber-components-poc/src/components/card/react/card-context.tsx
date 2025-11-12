import { createContext, useContext } from "react";
import type { CardContext } from "@gyldendal/kobber-components-core/card/card.core.js";

export const ReactCardContext = createContext<CardContext | null>(null);

export function useCardContext() {
  const context = useContext(ReactCardContext);
  if (!context) throw new Error("useCardContext must be used within <Card>");
  return context;
}
