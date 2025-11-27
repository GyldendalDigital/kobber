import { createContext } from "svelte";
import type { CardContext } from "../state/card.core";

export const [getCardContext, setCardContext] = createContext<CardContext>();
