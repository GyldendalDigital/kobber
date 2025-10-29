export interface CoreComponent<P> {
  customElementTagName: string;
  styles: string;
  onMount?: () => void;
  onUnmount?: () => void;
  render: (props: P) => any;
}
