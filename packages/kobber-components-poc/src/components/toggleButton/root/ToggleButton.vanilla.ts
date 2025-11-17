import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import {
  Component,
  normalizeProps,
  spreadProps,
  VanillaMachine,
} from "@gyldendal/kobber-components-core/vanilla";
import { getClassNames } from "./core";

interface Props {
  state: toggleButton.State;
}

export class ToggleButton extends Component<Props, toggleButton.Api> {
  initMachine(props: Props) {
    return new VanillaMachine(toggleButton.machine, props);
  }

  initApi() {
    return toggleButton.connect(this.machine.service, normalizeProps);
  }

  render = () => {
    const classNames = getClassNames(this.api);
    spreadProps(this.rootEl, {
      ...this.api.getButtonProps(),
      class: classNames.root,
    });
  };
}
