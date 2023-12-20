import { FunctionComponent, CSSProperties } from 'react';
import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement, CSSResultGroup } from 'lit';

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

type ResponsiveCssValue = string | Record<string, string>;

declare class Grid extends LitElement {
    static styles: lit.CSSResult;
    gridTemplate?: ResponsiveCssValue;
    gridAutoColumns?: ResponsiveCssValue;
    gridAutoFlow?: ResponsiveCssValue;
    gridAutoRows?: ResponsiveCssValue;
    gridTemplateAreas?: ResponsiveCssValue;
    gridTemplateColumns?: ResponsiveCssValue;
    gridTemplateRows?: ResponsiveCssValue;
    alignContent?: ResponsiveCssValue;
    justifyContent?: ResponsiveCssValue;
    gap?: ResponsiveCssValue;
    justifyItems?: ResponsiveCssValue;
    alignItems?: ResponsiveCssValue;
    paddingTop?: ResponsiveCssValue;
    paddingRight?: ResponsiveCssValue;
    paddingBottom?: ResponsiveCssValue;
    paddingLeft?: ResponsiveCssValue;
    hostStyles: () => {
        paddingTop: ResponsiveCssValue | undefined;
        paddingRight: ResponsiveCssValue | undefined;
        paddingBottom: ResponsiveCssValue | undefined;
        paddingLeft: ResponsiveCssValue | undefined;
    };
    gridStyles: () => {
        gridTemplate: ResponsiveCssValue | undefined;
        gridAutoColumns: ResponsiveCssValue | undefined;
        gridAutoFlow: ResponsiveCssValue | undefined;
        gridAutoRows: ResponsiveCssValue | undefined;
        gridTemplateColumns: ResponsiveCssValue | undefined;
        gridTemplateAreas: ResponsiveCssValue | undefined;
        gridTemplateRows: ResponsiveCssValue | undefined;
        alignContent: ResponsiveCssValue | undefined;
        justifyContent: ResponsiveCssValue | undefined;
        gap: ResponsiveCssValue | undefined;
        justifyItems: ResponsiveCssValue | undefined;
        alignItems: ResponsiveCssValue | undefined;
    };
    render(): lit_html.TemplateResult<1>;
}

declare class GridColumn extends LitElement {
    static styles: CSSResultGroup;
    span?: number | string;
    gridArea?: ResponsiveCssValue;
    alignSelf?: ResponsiveCssValue;
    justifySelf?: ResponsiveCssValue;
    styles: () => {
        gridArea: ResponsiveCssValue | undefined;
        gridColumn: string;
        alignSelf: ResponsiveCssValue | undefined;
        justifySelf: ResponsiveCssValue | undefined;
    };
    render(): lit_html.TemplateResult<1>;
}

export { Example as E, Grid as G, ProficiencyBar as P, GridColumn as a, ExampleProps as b, Props$1 as c, ProgressBar as d, Props as e };
