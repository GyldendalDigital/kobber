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
    render(): lit.TemplateResult<1>;
}

declare class Scene extends ContextProvider {
    static styles: lit.CSSResult[];
    minHeight?: string;
    responsiveBreakpoint: number;
    render(): lit.TemplateResult<1>;
}

declare enum CmsWhiteSpace {
    None = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    ExtraLarge = 4
}
declare enum CmsMaxWidth {
    None = 0,
    StandardText = 1,
    ExtendedText = 2
}
declare enum CmsHorizontalAlignment {
    None = 0,
    Left = 1,
    Center = 2,
    Right = 3
}
declare enum CmsVerticalAlignment {
    None = 0,
    Top = 1,
    Center = 2,
    Bottom = 3,
    Stretch = 4
}
declare enum CmsContentBoxFill {
    None = 0,
    White = 1,
    Dark = 2
}
declare enum CmsBackgroundImageStyle {
    Stretch = 0,
    Tile = 1,
    Fit = 2
}
interface CmsRow {
    id: string;
    columns: CmsColumn[];
}
interface CmsColumn {
    activitySections: {
        element: string;
    }[];
    dynamicContentIds: string[];
}
type PaddingValue = string | number;
type Padding = [
    top: PaddingValue,
    right: PaddingValue,
    bottom: PaddingValue,
    left: PaddingValue
];

declare class SceneBoundary extends LitElement {
    static styles: lit.CSSResult[];
    private getHostStyles;
    private getInnerStyles;
    private get getTheme();
    private get hasContentBoxFill();
    private get transform();
    private _context;
    padding: Padding;
    maxContentWidth?: string;
    contentBoxFill?: CmsContentBoxFill;
    verticalAlignments: CmsVerticalAlignment;
    render(): lit.TemplateResult<1>;
}

declare class SceneColumn extends LitElement {
    static styles: lit.CSSResult[];
    private getHostStyles;
    private get transform();
    private _context;
    sectionWhitespace: CmsWhiteSpace;
    verticalAlignments: CmsVerticalAlignment;
    render(): lit.TemplateResult<1>;
}

declare class SceneBackground extends LitElement {
    private static _preventFlickeringElementsInSections;
    static styles: lit.CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _intervalId?;
    private _forceRepaint;
    private _stopForcingRepaint;
    render(): lit.TemplateResult<1>;
}

declare class SceneImageBackground extends SceneBackground {
    static styles: lit.CSSResult[];
    backgroundColor: string;
    backgroundImageUrl?: string;
    backgroundImageStyle?: CmsBackgroundImageStyle;
    width?: string;
    connectedCallback(): void;
    private getStyles;
    render(): lit.TemplateResult<1>;
}

declare class SceneRow extends LitElement {
    static styles: lit.CSSResult[];
    private _context;
    columns: string;
    rowWhitespace: CmsWhiteSpace;
    sectionWhitespace?: CmsWhiteSpace;
    maxWidth: CmsMaxWidth;
    horizontalAlignment: CmsHorizontalAlignment;
    private getHostStyles;
    private get transform();
    render(): lit.TemplateResult<1>;
}

export { CmsWhiteSpace as C, Padding as P, Scene as S, CmsHorizontalAlignment as a, CmsRow as b, CmsContentBoxFill as c, SceneImageBackground as d, SceneBoundary as e, SceneRow as f, SceneColumn as g };
