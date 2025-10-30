declare global {
  declare namespace JSX {
    interface IntrinsicElements {
      [tagName: string]: any;
    }
  }
}
