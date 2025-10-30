if (typeof globalThis.HTMLElement === "undefined") {
  (globalThis as any).HTMLElement = class {};
}
