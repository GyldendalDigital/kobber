import type { CoreComponent } from "./types.js";

interface Options<P> {
  customElementTagName: string;
  render: (props: P) => string | string[];
}

export const createCoreComponent = <P>(options: Options<P>): CoreComponent<P> => {
  return {
    customElementTagName: options.customElementTagName,

    render: props => {
      const result = options.render(props);
      return Array.isArray(result) ? result.join("") : result;
    },
  };
};
