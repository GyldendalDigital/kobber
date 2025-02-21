import * as React from "react";
import { createComponent } from "@lit/react";
import { RadioGroup } from "./RadioGroup";
const tagName = "RadioGroup";
RadioGroup.define("RadioGroup");
const reactWrapper = createComponent({
  tagName,
  elementClass: RadioGroup,
  react: React,
  events: {
    onSlChange: "change",
    onSlInput: "input",
    onSlInvalid: "invalid",
  },
  displayName: "RadioGroup",
});
const KobberRadioGroup = reactWrapper;

export { RadioGroup };
