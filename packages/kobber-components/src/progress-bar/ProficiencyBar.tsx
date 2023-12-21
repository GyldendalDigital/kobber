import React, { CSSProperties, FunctionComponent } from "react";
import "./ProgressBar.module.css";
import { ProgressBar } from "./ProgressBar";
import { getProficiencyNameByPercentage } from "../utils/progressHelpers";

export interface Props {
  className?: string;
  labelledById: string;
  progressInPercent: number;
  style?: CSSProperties;
}

export const propNames = {
  className: "string",
  labelledById: "string",
  progressInPercent: "number",
  style: "json",
};

/**
 * A simple and accessible one-bar measuring proficiency by pre-defined values. This will probably cover most use cases.
 * @param progressInPercent A number indicating the achieved progress.
 * @returns One progress bar on background, with colors that are aligned with the achieved progress.
 */
export const ProficiencyBar: FunctionComponent<Props> = ({
  className,
  labelledById,
  progressInPercent,
  style,
}) => {
  return (
    <ProgressBar
      className={className}
      style={{
        ...style,
        ...({
          "--progress-bar-background-color": `var(--kobber-component-progressbar-color-background-${getProficiencyNameByPercentage(
            progressInPercent,
          )})`,
        } as CSSProperties),
      }}
      progressBars={[
        {
          "aria-labelledby": labelledById,
          valueNow: progressInPercent,
          fillColorVar: `--kobber-component-progressbar-color-foreground-${getProficiencyNameByPercentage(
            progressInPercent,
          )}`,
        },
      ]}
    />
  );
};
