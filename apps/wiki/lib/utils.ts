import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_NAME } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type PlaceholderImageProps = {
  backgroundColor?: string;
  textColor?: string;
  textRows?: string[];
};
/**
 * Colors are names (green) or 6 digit hex codes without # prefix (eae0e1)
 */
export const placeholderImageUrl = ({
  backgroundColor = "eae0e1",
  textColor = "691837",
  textRows = ["placeholder", "image"],
}: PlaceholderImageProps) =>
  `https://placehold.co/600x400/${backgroundColor}/${textColor}?text=${textRows.join("%5Cn")}`;

/** Get page pathname based on file location */
export const pagePathname = (metaUrl: string) => metaUrl.split("(web)")[1].replace("/page.tsx", "");

export const documentTitle = (pageTitle: string) => pageTitle + " | " + APP_NAME;
