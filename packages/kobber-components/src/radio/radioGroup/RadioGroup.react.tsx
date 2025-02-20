import * as React from "react";
import { createComponent } from "@lit/react";
import KobberRadioGroup from "./RadioGroup";
import { radioGroupName } from "../Radio.core";
const tagName = radioGroupName;
KobberRadioGroup.define(radioGroupName);
const reactWrapper = createComponent({
  tagName,
  elementClass: KobberRadioGroup,
  react: React,
  events: {
    onSlChange: "change",
    onSlInput: "input",
    onSlInvalid: "invalid",
  },
  displayName: radioGroupName,
});
const RadioGroup = reactWrapper;

export { RadioGroup };
