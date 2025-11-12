import { createContext } from "svelte";
import type { CardContext } from "@gyldendal/kobber-components-core/card/card.core.js";

export const [getCardContext, setCardContext] = createContext<CardContext>();
