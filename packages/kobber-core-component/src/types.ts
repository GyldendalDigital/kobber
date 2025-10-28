export interface CoreComponent<P> {
  customElementTagName: string;
  render: (props: P) => string;
}
