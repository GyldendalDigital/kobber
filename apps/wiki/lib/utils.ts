import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type PlaceholderImageProps = {
  backgroundColor?: string
  textColor?: string
  textRows?: string[]
}

/**
 * Colors are names (green) or 6 digit hex codes without # prefix (eae0e1)
 */
export const placeholderImageUrl = ({
  backgroundColor = "eae0e1",
  textColor = "691837",
  textRows = ["placeholder", "image"],
}: PlaceholderImageProps) =>
  `https://placehold.co/600x400/${backgroundColor}/${textColor}?text=${textRows.join("%5Cn")}`

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const rgb = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null

  return rgb ? `(${rgb.r}, ${rgb.g}, ${rgb.b})` : null
}
