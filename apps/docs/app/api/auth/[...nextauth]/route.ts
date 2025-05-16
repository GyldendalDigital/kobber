import { HTMLElement } from "@lit-labs/ssr-dom-shim"
import { handlers } from "@/lib/auth"

globalThis.HTMLElement ??= HTMLElement

export const { GET, POST } = handlers
