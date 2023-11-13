import { FunctionComponent, CSSProperties } from 'react';

interface ExampleProps {
    backgroundColor: string;
    message: string;
}
/** JSDoc på komponent vises ikke i Storybook >_> */
declare const Example: FunctionComponent<ExampleProps>;

interface Props$1 {
    className?: string;
    labelledById: string;
    progressInPercent: number;
    style?: CSSProperties;
}
/**
 * A simple and accessible one-bar measuring proficiency by pre-defined values. This will probably cover most use cases.
 * @param progressInPercent A number indicating the achieved progress.
 * @returns One progress bar on background, with colors that are aligned with the achieved progress.
 */
declare const ProficiencyBar: FunctionComponent<Props$1>;

type AriaProps = {
    "aria-label": string;
    "aria-labelledby"?: never;
} | {
    "aria-label"?: never;
    "aria-labelledby": string;
};
type ProgressBarType = AriaProps & {
    explainOtherUnitThanPercentage?: string;
    valueNow: number;
    valueMin?: number;
    valueMax?: number;
    fillColorVar?: string;
    filledColorVar?: string;
};

interface Props {
    className?: string;
    progressBars: Array<ProgressBarType>;
    showFullLength?: boolean;
    style?: CSSProperties;
    height?: "default" | "low";
}
/**
 * A flexible and accessible bar intended to be used for learning analytics, and all other progress to be measured.
 * The component does not use the html `<progress>` element due to its default styling. This can be reconsidered, however.
 * @param progressBars Array of an arbitrary number of progress bar objects. These are the actual progress bars, listed in a container. In most use cases there is just one, in some others: two.
 * @param showFullLength Applies only when more than one progress bar: Spread progress bars of their full length. Preferably used when the sum of two bars is 100.
 * @returns Progress bar(s) on background.
 */
declare const ProgressBar: FunctionComponent<Props>;

export { Example, ExampleProps, ProficiencyBar, Props$1 as ProficiencyBarProps, ProgressBar, Props as ProgressBarProps };
