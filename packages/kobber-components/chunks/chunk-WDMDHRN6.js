// src/example/Example.tsx
import tokens from "@gyldendal/kobber-base/themes/default/tokens.json";
import React from "react";

// src/example/example.module.css
var example_module_default = {
  example: "example_module_example"
};

// src/example/Example.tsx
var propNames = {
  backgroundColor: "string",
  message: "string"
};
var Example = ({
  message,
  backgroundColor
}) => /* @__PURE__ */ React.createElement(
  "div",
  {
    className: example_module_default.example,
    style: {
      backgroundColor,
      padding: tokens.primitives.size[16],
      border: `solid 1px ${tokens.primitives.color.gray[800]}`
    }
  },
  message
);

// src/progress-bar/ProgressBar.tsx
import React3 from "react";

// src/progress-bar/ProgressBar.module.css
var ProgressBar_module_default = {
  list: "ProgressBar_module_list",
  low: "ProgressBar_module_low",
  "show-full-length": "ProgressBar_module_show-full-length"
};

// src/progress-bar/ProgressBarItem.tsx
import React2 from "react";

// src/progress-bar/progressBarItem.module.css
var progressBarItem_module_default = {
  item: "progressBarItem_module_item",
  fill: "progressBarItem_module_fill"
};

// src/progress-bar/ProgressBarItem.tsx
var ProgressBarItem = ({
  className = "",
  fillerWidth,
  progressBar
}) => {
  const valueMin = progressBar.valueMin || 0;
  const valueMax = progressBar.valueMax || 100;
  return /* @__PURE__ */ React2.createElement(
    "li",
    {
      className: `${progressBarItem_module_default.item} ${className}`,
      style: {
        "--progress-bar-item-width": `${fillerWidth}`
      }
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: progressBarItem_module_default.fill,
        role: "progressbar",
        style: {
          "--progress-bar-fill-color": progressBar.valueNow === valueMax && !!progressBar.filledColorVar ? `var(${progressBar.filledColorVar})` : progressBar.fillColorVar ? `var(${progressBar.fillColorVar})` : "var(--component-progressbar-color-foreground-default)"
        },
        "aria-valuenow": progressBar.valueNow,
        "aria-valuemin": valueMin,
        "aria-label": progressBar["aria-label"],
        "aria-labelledby": progressBar["aria-labelledby"],
        "aria-valuetext": progressBar.explainOtherUnitThanPercentage,
        "aria-valuemax": valueMax
      }
    )
  );
};

// src/progress-bar/ProgressBar.tsx
var propNames2 = {
  className: "string",
  progressBars: "json",
  showFullLength: "boolean",
  style: "json",
  height: "string"
};
var ProgressBar = ({
  className = "",
  progressBars,
  showFullLength = false,
  style,
  height = "default"
}) => {
  let previousWidths = 0;
  return /* @__PURE__ */ React3.createElement(
    "ol",
    {
      className: `${ProgressBar_module_default.list} ${showFullLength ? ProgressBar_module_default["show-full-length"] : ""} ${height === "low" ? ProgressBar_module_default.low : ""} ${className}`,
      style
    },
    progressBars.map((progressBar, index) => {
      let formerPreviousWidths = 0;
      if (!showFullLength) {
        formerPreviousWidths = previousWidths;
        previousWidths += progressBar.valueNow;
      }
      return /* @__PURE__ */ React3.createElement(
        ProgressBarItem,
        {
          key: index,
          progressBar,
          fillerWidth: progressBar.valueNow - formerPreviousWidths
        }
      );
    })
  );
};

// src/progress-bar/ProficiencyBar.tsx
import React4 from "react";

// src/utils/progressHelpers.ts
var getProficiencyNameByPercentage = (progressInPercent) => {
  if (progressInPercent === 0)
    return "unknown";
  if (progressInPercent < 20)
    return "low";
  if (progressInPercent < 40)
    return "some";
  if (progressInPercent < 60)
    return "basics";
  if (progressInPercent < 80)
    return "good";
  return "high";
};

// src/progress-bar/ProficiencyBar.tsx
var propNames3 = {
  className: "string",
  labelledById: "string",
  progressInPercent: "number",
  style: "json"
};
var ProficiencyBar = ({
  className,
  labelledById,
  progressInPercent,
  style
}) => {
  return /* @__PURE__ */ React4.createElement(
    ProgressBar,
    {
      className,
      style: {
        ...style,
        ...{
          "--progress-bar-background-color": `var(--component-progressbar-color-background-${getProficiencyNameByPercentage(progressInPercent)})`
        }
      },
      progressBars: [{
        "aria-labelledby": labelledById,
        valueNow: progressInPercent,
        fillColorVar: `--component-progressbar-color-foreground-${getProficiencyNameByPercentage(progressInPercent)}`
      }]
    }
  );
};

export {
  propNames,
  Example,
  propNames2,
  ProgressBar,
  propNames3,
  ProficiencyBar
};
