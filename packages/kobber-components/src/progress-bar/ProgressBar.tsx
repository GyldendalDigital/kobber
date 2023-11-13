import React, { CSSProperties, FunctionComponent } from "react";
import classNames from "./ProgressBar.module.css";
import { ProgressBarItem, ProgressBarType } from "./ProgressBarItem";

export interface Props {
  className?: string;
  progressBars: Array<ProgressBarType>;
  showFullLength?: boolean;
  style?: CSSProperties;
  height?: "default" | "low";
}

export const propNames = {
  className: "string",
  progressBars: "json",
  showFullLength: "boolean",
  style: "json",
  height: "string",
};

/**
 * A flexible and accessible bar intended to be used for learning analytics, and all other progress to be measured.
 * The component does not use the html `<progress>` element due to its default styling. This can be reconsidered, however.
 * @param progressBars Array of an arbitrary number of progress bar objects. These are the actual progress bars, listed in a container. In most use cases there is just one, in some others: two.
 * @param showFullLength Applies only when more than one progress bar: Spread progress bars of their full length. Preferably used when the sum of two bars is 100.
 * @returns Progress bar(s) on background.
 */
export const ProgressBar: FunctionComponent<Props> = ({
  className = "",
  progressBars,
  showFullLength = false,
  style,
  height = "default",
}) => {
  let previousWidths = 0;
  return (
    <ol
      className={`${classNames.list} ${
        showFullLength ? classNames["show-full-length"] : ""
      } ${height === "low" ? classNames.low : ""} ${className}`}
      style={style}
    >
      {progressBars.map((progressBar, index) => {
        let formerPreviousWidths = 0;
        if (!showFullLength) {
          formerPreviousWidths = previousWidths;
          previousWidths += progressBar.valueNow;
        }
        return (
          <ProgressBarItem
            key={index}
            progressBar={progressBar}
            fillerWidth={progressBar.valueNow - formerPreviousWidths}
          />
        );
      })}
    </ol>
  );
};
