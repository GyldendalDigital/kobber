import { CoreComponent } from "./types.js";

interface Props<P> {
  coreInstance: CoreComponent<P>;
}

export function ReactComponent<P>({ coreInstance, ...props }: Props<P>) {
  (globalThis as any).React.useEffect(() => {
    coreInstance.onMount?.();
    return () => coreInstance.onUnmount?.();
  }, []);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: coreInstance.render(props as P) }}
    />
  );
}
