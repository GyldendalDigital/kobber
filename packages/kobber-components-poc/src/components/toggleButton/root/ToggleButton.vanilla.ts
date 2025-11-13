import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import {
  Component,
  normalizeProps,
  spreadProps,
  VanillaMachine,
} from "@gyldendal/kobber-components-core/vanilla";
import { getClassNames } from "./core";

export class ToggleButton extends Component<toggleButton.ToggleButtonOptions, toggleButton.Api> {
  initMachine(props: toggleButton.ToggleButtonOptions) {
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
