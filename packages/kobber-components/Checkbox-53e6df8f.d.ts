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

type EventTypeRequiresDetail<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? never : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? never : T : never : never;
type EventTypeDoesNotRequireDetail<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? T : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? T : never : T : T;
type EventTypesWithRequiredDetail = {
    [EventType in keyof GlobalEventHandlersEventMap as EventTypeRequiresDetail<EventType>]: true;
};
type EventTypesWithoutRequiredDetail = {
    [EventType in keyof GlobalEventHandlersEventMap as EventTypeDoesNotRequireDetail<EventType>]: true;
};
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
type SlEventInit<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>> ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>> ? CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]> : Partial<GlobalEventHandlersEventMap[T]["detail"]> extends GlobalEventHandlersEventMap[T]["detail"] ? CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]> : WithRequired<CustomEventInit<GlobalEventHandlersEventMap[T]["detail"]>, "detail"> : CustomEventInit : CustomEventInit;
type GetCustomEventType<T> = T extends keyof GlobalEventHandlersEventMap ? GlobalEventHandlersEventMap[T] extends CustomEvent<unknown> ? GlobalEventHandlersEventMap[T] : CustomEvent<unknown> : CustomEvent<unknown>;
declare class ShoelaceElement extends LitElement {
    dir: string;
    lang: string;
    /** Emits a custom event with more convenient defaults. */
    emit<T extends string & keyof EventTypesWithoutRequiredDetail>(name: EventTypeDoesNotRequireDetail<T>, options?: SlEventInit<T> | undefined): GetCustomEventType<T>;
    emit<T extends string & keyof EventTypesWithRequiredDetail>(name: EventTypeRequiresDetail<T>, options: SlEventInit<T>): GetCustomEventType<T>;
    static version: string;
    static define(name: string, elementConstructor?: typeof ShoelaceElement, options?: ElementDefinitionOptions): void;
    static dependencies: Record<string, typeof ShoelaceElement>;
    constructor();
}
interface ShoelaceFormControl extends ShoelaceElement {
    name: string;
    value: unknown;
    disabled?: boolean;
    defaultValue?: unknown;
    defaultChecked?: boolean;
    form?: string;
    pattern?: string;
    min?: number | string | Date;
    max?: number | string | Date;
    step?: number | "any";
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    checked?: boolean;
    indeterminate?: boolean;
    input: HTMLInputElement;
    readonly validity: ValidityState;
    readonly validationMessage: string;
    checkValidity: () => boolean;
    getForm: () => HTMLFormElement | null;
    reportValidity: () => boolean;
    setCustomValidity: (message: string) => void;
}

declare class Checkbox extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /** The name of the checkbox, submitted as a name/value pair with form data. */
    name: string;
    /** The current value of the checkbox, submitted as a name/value pair with form data. */
    value: string;
    /** Disables the checkbox. */
    disabled: boolean;
    /** Draws the checkbox in a checked state. */
    checked: boolean;
    /**
     * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
     * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
     */
    indeterminate: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultChecked: boolean;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: string;
    /** Makes the checkbox a required field. */
    required: boolean;
    /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
    helpText: string;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    firstUpdated(): void;
    private handleClick;
    private handleBlur;
    private handleInput;
    private handleInvalid;
    private handleFocus;
    handleDisabledChange(): void;
    handleStateChange(): void;
    /** Simulates a click on the checkbox. */
    click(): void;
    /** Sets focus on the checkbox. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the checkbox. */
    blur(): void;
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity(): boolean;
    /** Gets the associated form, if one exists. */
    getForm(): HTMLFormElement | null;
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity(): boolean;
    /**
     * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
     * the custom validation message, call this method with an empty string.
     */
    setCustomValidity(message: string): void;
    render(): lit_html.TemplateResult<1>;
}

export { Checkbox as C, Example as E, Grid as G, ProficiencyBar as P, GridColumn as a, ExampleProps as b, Props$1 as c, ProgressBar as d, Props as e };
