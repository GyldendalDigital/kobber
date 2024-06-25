import { createComponent } from "@lit/react";
import * as React from "react";

import { Icon } from "./icon/Icon";

export const KobberIcon = createComponent({
  tagName: "kobber-icon",
  elementClass: Icon,
  react: React,
});