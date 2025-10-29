import { CoreComponent, ExampleReactProps } from "./Example.core";
import { ReactComponent } from "@gyldendal/kobber-core-component/ReactComponent";

const coreInstance = CoreComponent<ExampleReactProps>();

export const Example = (props: ExampleReactProps) => (
  <ReactComponent {...props} coreInstance={coreInstance} />
);
