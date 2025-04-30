import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

type PlaceholderImageProps = {
  backgroundColor?: string
  textColor?: string
  textRows?: string[]
  size?: string | "600x400" | "20x20"
}

/**
 * Colors are names (green) or 6 digit hex codes without # prefix (eae0e1)
 */
export const placeholderImageUrl = ({
  backgroundColor = "eae0e1",
  textColor = "691837",
  textRows = ["placeholder", "image"],
  size = "600x400",
}: PlaceholderImageProps) =>
  `https://placehold.co/${size}/${backgroundColor}/${textColor}?text=${textRows.join("%5Cn")}`

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const rgb = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null

  return rgb ? `(${rgb.r}, ${rgb.g}, ${rgb.b})` : null
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function toUpperCase(str: string): string {
  if (!str) return str
  return str.toUpperCase()
}

export function ensurePrefix(str: string | undefined, prefix: string): string {
  if (!str) return prefix
  return str.startsWith(prefix) ? str : prefix + str
}

export const groupBy = <T, K extends string>(arr: T[], key: (i: T) => K) =>
  arr.reduce(
    (groups, item) => {
      ;(groups[key(item)] ||= []).push(item)
      return groups
    },
    {} as Record<K, T[]>
  )
