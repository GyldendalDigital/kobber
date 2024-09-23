import { Theme } from "../utils/theme-context.types";

export type ButtonVariant = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"]["neutral"];
export type ButtonBackgroundColor = keyof Theme["tokens"]["component"]["button"]["background"]["color"]["primary"];
export type ButtonBorderColor = keyof Theme["tokens"]["component"]["button"]["container"]["border"]["color"];
export type ButtonLevel = keyof Theme["tokens"]["component"]["button"]["text"]["color"]["carmine"]["main"];
