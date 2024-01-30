import * as lit from 'lit';
import { CSSResult, LitElement } from 'lit';
import { ContextProvider as ContextProvider$1 } from '@lit/context';

type CssDimensionTransformer = (value: string | number) => CSSResult;
interface Context {
    cssDimensionTransformer: CssDimensionTransformer;
}

declare class ContextProvider extends LitElement {
    provider: ContextProvider$1<{
        __context__: Context;
    }, this>;
    set cssDimensionTransformer(cssDimensionTransformer: (value: string | number) => string);
    responsiveBreakpoint: number;
    private _resizeObserver;
    constructor();
    private _resizeObserverEntriesToWidth;
    private _updateCssColumns;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
}

declare class Scene extends ContextProvider {
    static styles: lit.CSSResult[];
    minHeight?: string;
    render(): lit.TemplateResult<1>;
}

declare enum RedapticWhiteSpace {
    None = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    ExtraLarge = 4
}
declare enum RedapticMaxWidth {
    None = 0,
    StandardText = 1,
    ExtendedText = 2
}
declare enum RedapticHorizontalAlignment {
    None = 0,
    Left = 1,
    Center = 2,
    Right = 3
}
declare enum RedapticVerticalAlignment {
    None = 0,
    Top = 1,
    Center = 2,
    Bottom = 3,
    Stretch = 4
}
declare enum ActivityContentBoxFill {
    None = 0,
    White = 1,
    Dark = 2
}
declare enum RedapticBackgroundImageStyle {
    Stretch = 0,
    Tile = 1,
    Fit = 2
}
interface RedapticRow {
    id: string;
    columns: RedapticColumn[];
}
interface RedapticColumn {
    activitySections: {
        element: string;
    }[];
    dynamicContentIds: string[];
}

declare class SceneBoundary extends LitElement {
    static styles: lit.CSSResult[];
    private getHostStyles;
    private getInnerStyles;
    private get getTheme();
    private get hasContentBoxFill();
    private get transform();
    private _context;
    isFirstRow?: boolean;
    isFullWidth?: boolean;
    applyPaddingBottom?: boolean;
    maxContentWidth?: string;
    contentBoxFill?: ActivityContentBoxFill;
    sceneWhitespace: RedapticWhiteSpace;
    sceneHorizontalAlignments: RedapticHorizontalAlignment;
    verticalAlignments: RedapticVerticalAlignment;
    render(): lit.TemplateResult<1>;
}

declare class SceneColumn extends LitElement {
    static styles: lit.CSSResult[];
    private getHostStyles;
    private get transform();
    private _context;
    sectionWhitespace: RedapticWhiteSpace;
    verticalAlignments: RedapticVerticalAlignment;
    render(): lit.TemplateResult<1>;
}

declare class SceneRow extends LitElement {
    static styles: lit.CSSResult[];
    private _context;
    columns: string;
    rowWhitespace: RedapticWhiteSpace;
    sectionWhitespace?: RedapticWhiteSpace;
    maxWidth: RedapticMaxWidth;
    horizontalAlignment: RedapticHorizontalAlignment;
    private getHostStyles;
    private get transform();
    render(): lit.TemplateResult<1>;
}

type RowGroupPresentation = "normal" | "fullWidth" | "fullSize";
declare const groupRowsByPresentation: <CompleteRedapticRow extends RedapticRow>(rows: CompleteRedapticRow[], contentBoxFill: ActivityContentBoxFill) => {
    applyPaddingBottom: boolean;
    presentation: RowGroupPresentation;
    rows: CompleteRedapticRow[];
}[];

export { RedapticBackgroundImageStyle as R, Scene as S, SceneBoundary as a, SceneRow as b, SceneColumn as c, groupRowsByPresentation as g };
