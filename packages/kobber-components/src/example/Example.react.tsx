import { createExampleCore, ExampleReactProps } from "./Example.core";

const exampleCore = createExampleCore<ExampleReactProps>();

export const Example = (props: ExampleReactProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: exampleCore.render(props) }} />
  );
};
