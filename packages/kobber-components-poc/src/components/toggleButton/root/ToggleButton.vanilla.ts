import {
  Component,
  normalizeProps,
  spreadProps,
  VanillaMachine,
} from "../../../core/zagFormats/vanilla";
import { toggleButtonApi } from "../index.api";
import * as stateMachine from "../state/toggleButton";

interface Props {
  state: stateMachine.State;
}

export class ToggleButton extends Component<Props, stateMachine.Api> {
  initMachine(props: Props) {
    return new VanillaMachine(stateMachine.machine, props);
  }

  initApi() {
    return stateMachine.connect(this.machine.service, normalizeProps);
  }

  render = () => {
    const api = toggleButtonApi({ isActive: this.api.active });
    spreadProps(this.rootEl, {
      ...this.api.getButtonProps(),
      class: api.root.className,
    });
  };
}
