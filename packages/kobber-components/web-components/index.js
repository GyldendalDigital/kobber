import {
  Example,
  ProficiencyBar,
  ProgressBar,
  propNames,
  propNames2,
  propNames3
} from "../chunks/chunk-WDMDHRN6.js";

// src/example/web-component.ts
import r2wc from "@r2wc/react-to-web-component";
var Example2 = r2wc(Example, {
  props: propNames,
  shadow: "open"
});
window.customElements.define("kobber-example", Example2);

// src/progress-bar/web-component.ts
import r2wc2 from "@r2wc/react-to-web-component";
var ProgressBar2 = r2wc2(ProgressBar, {
  props: propNames2,
  shadow: "open"
});
var ProficiencyBar2 = r2wc2(ProficiencyBar, {
  props: propNames3,
  shadow: "open"
});
window.customElements.define("kobber-progress-bar", ProgressBar2);
window.customElements.define("kobber-proficiency-bar", ProficiencyBar2);
export {
  Example2 as Example,
  ProficiencyBar2 as ProficiencyBar,
  ProgressBar2 as ProgressBar
};
