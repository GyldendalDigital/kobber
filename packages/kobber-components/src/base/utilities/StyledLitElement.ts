/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import {
  responsiveValueConverter as converter,
  type ResponsiveCssValue,
} from "./responsiveCssValue";

type CSSProperties = Omit<
  CSSStyleDeclaration,
  | "getPropertyPriority"
  | "getPropertyValue"
  | "item"
  | "removeProperty"
  | "setProperty"
  | "translate"
  | "length"
  | "parentRule"
>;

type ResponsiveCSSProperties = {
  [K in keyof CSSProperties]?: ResponsiveCssValue;
};

export class StyledLitElement extends LitElement implements ResponsiveCSSProperties {
  [x: number]: ResponsiveCssValue;

  @property({ converter, attribute: "accent-color" })
  accentColor?: ResponsiveCssValue;

  @property({ converter, attribute: "align-content" })
  alignContent?: ResponsiveCssValue;

  @property({ converter, attribute: "align-items" })
  alignItems?: ResponsiveCssValue;

  @property({ converter, attribute: "align-self" })
  alignSelf?: ResponsiveCssValue;

  @property({ converter, attribute: "alignment-baseline" })
  alignmentBaseline?: ResponsiveCssValue;

  @property({ converter, attribute: "all" })
  all?: ResponsiveCssValue;

  @property({ converter, attribute: "animation" })
  animation?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-composition" })
  animationComposition?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-delay" })
  animationDelay?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-direction" })
  animationDirection?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-duration" })
  animationDuration?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-fill-mode" })
  animationFillMode?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-iteration-count" })
  animationIterationCount?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-name" })
  animationName?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-play-state" })
  animationPlayState?: ResponsiveCssValue;

  @property({ converter, attribute: "animation-timing-function" })
  animationTimingFunction?: ResponsiveCssValue;

  @property({ converter, attribute: "appearance" })
  appearance?: ResponsiveCssValue;

  @property({ converter, attribute: "aspect-ratio" })
  aspectRatio?: ResponsiveCssValue;

  @property({ converter, attribute: "backdrop-filter" })
  backdropFilter?: ResponsiveCssValue;

  @property({ converter, attribute: "backface-visibility" })
  backfaceVisibility?: ResponsiveCssValue;

  @property({ converter, attribute: "background" })
  background?: ResponsiveCssValue;

  @property({ converter, attribute: "background-attachment" })
  backgroundAttachment?: ResponsiveCssValue;

  @property({ converter, attribute: "background-blend-mode" })
  backgroundBlendMode?: ResponsiveCssValue;

  @property({ converter, attribute: "background-clip" })
  backgroundClip?: ResponsiveCssValue;

  @property({ converter, attribute: "background-color" })
  backgroundColor?: ResponsiveCssValue;

  @property({ converter, attribute: "background-image" })
  backgroundImage?: ResponsiveCssValue;

  @property({ converter, attribute: "background-origin" })
  backgroundOrigin?: ResponsiveCssValue;

  @property({ converter, attribute: "background-position" })
  backgroundPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "background-position-x" })
  backgroundPositionX?: ResponsiveCssValue;

  @property({ converter, attribute: "background-position-y" })
  backgroundPositionY?: ResponsiveCssValue;

  @property({ converter, attribute: "background-repeat" })
  backgroundRepeat?: ResponsiveCssValue;

  @property({ converter, attribute: "background-size" })
  backgroundSize?: ResponsiveCssValue;

  @property({ converter, attribute: "baseline-shift" })
  baselineShift?: ResponsiveCssValue;

  @property({ converter, attribute: "baseline-source" })
  baselineSource?: ResponsiveCssValue;

  @property({ converter, attribute: "block-size" })
  blockSize?: ResponsiveCssValue;

  @property({ converter, attribute: "border" })
  border?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block" })
  borderBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-color" })
  borderBlockColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-end" })
  borderBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-end-color" })
  borderBlockEndColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-end-style" })
  borderBlockEndStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-end-width" })
  borderBlockEndWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-start" })
  borderBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-start-color" })
  borderBlockStartColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-start-style" })
  borderBlockStartStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-start-width" })
  borderBlockStartWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-style" })
  borderBlockStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-block-width" })
  borderBlockWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom" })
  borderBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom-color" })
  borderBottomColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom-left-radius" })
  borderBottomLeftRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom-right-radius" })
  borderBottomRightRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom-style" })
  borderBottomStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-bottom-width" })
  borderBottomWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-collapse" })
  borderCollapse?: ResponsiveCssValue;

  @property({ converter, attribute: "border-color" })
  borderColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-end-end-radius" })
  borderEndEndRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-end-start-radius" })
  borderEndStartRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image" })
  borderImage?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image-outset" })
  borderImageOutset?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image-repeat" })
  borderImageRepeat?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image-slice" })
  borderImageSlice?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image-source" })
  borderImageSource?: ResponsiveCssValue;

  @property({ converter, attribute: "border-image-width" })
  borderImageWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline" })
  borderInline?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-color" })
  borderInlineColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-end" })
  borderInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-end-color" })
  borderInlineEndColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-end-style" })
  borderInlineEndStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-end-width" })
  borderInlineEndWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-start" })
  borderInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-start-color" })
  borderInlineStartColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-start-style" })
  borderInlineStartStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-start-width" })
  borderInlineStartWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-style" })
  borderInlineStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-inline-width" })
  borderInlineWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-left" })
  borderLeft?: ResponsiveCssValue;

  @property({ converter, attribute: "border-left-color" })
  borderLeftColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-left-style" })
  borderLeftStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-left-width" })
  borderLeftWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-radius" })
  borderRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-right" })
  borderRight?: ResponsiveCssValue;

  @property({ converter, attribute: "border-right-color" })
  borderRightColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-right-style" })
  borderRightStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-right-width" })
  borderRightWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-spacing" })
  borderSpacing?: ResponsiveCssValue;

  @property({ converter, attribute: "border-start-end-radius" })
  borderStartEndRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-start-start-radius" })
  borderStartStartRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-style" })
  borderStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top" })
  borderTop?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top-color" })
  borderTopColor?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top-left-radius" })
  borderTopLeftRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top-right-radius" })
  borderTopRightRadius?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top-style" })
  borderTopStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "border-top-width" })
  borderTopWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "border-width" })
  borderWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "bottom" })
  bottom?: ResponsiveCssValue;

  @property({ converter, attribute: "box-shadow" })
  boxShadow?: ResponsiveCssValue;

  @property({ converter, attribute: "box-sizing" })
  boxSizing?: ResponsiveCssValue;

  @property({ converter, attribute: "break-after" })
  breakAfter?: ResponsiveCssValue;

  @property({ converter, attribute: "break-before" })
  breakBefore?: ResponsiveCssValue;

  @property({ converter, attribute: "break-inside" })
  breakInside?: ResponsiveCssValue;

  @property({ converter, attribute: "caption-side" })
  captionSide?: ResponsiveCssValue;

  @property({ converter, attribute: "caret-color" })
  caretColor?: ResponsiveCssValue;

  @property({ converter, attribute: "clear" })
  clear?: ResponsiveCssValue;

  @property({ converter, attribute: "clip" })
  clip?: ResponsiveCssValue;

  @property({ converter, attribute: "clip-path" })
  clipPath?: ResponsiveCssValue;

  @property({ converter, attribute: "clip-rule" })
  clipRule?: ResponsiveCssValue;

  @property({ converter, attribute: "color" })
  color?: ResponsiveCssValue;

  @property({ converter, attribute: "color-interpolation" })
  colorInterpolation?: ResponsiveCssValue;

  @property({ converter, attribute: "color-interpolation-filters" })
  colorInterpolationFilters?: ResponsiveCssValue;

  @property({ converter, attribute: "color-scheme" })
  colorScheme?: ResponsiveCssValue;

  @property({ converter, attribute: "column-count" })
  columnCount?: ResponsiveCssValue;

  @property({ converter, attribute: "column-fill" })
  columnFill?: ResponsiveCssValue;

  @property({ converter, attribute: "column-gap" })
  columnGap?: ResponsiveCssValue;

  @property({ converter, attribute: "column-rule" })
  columnRule?: ResponsiveCssValue;

  @property({ converter, attribute: "column-rule-color" })
  columnRuleColor?: ResponsiveCssValue;

  @property({ converter, attribute: "column-rule-style" })
  columnRuleStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "column-rule-width" })
  columnRuleWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "column-span" })
  columnSpan?: ResponsiveCssValue;

  @property({ converter, attribute: "column-width" })
  columnWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "columns" })
  columns?: ResponsiveCssValue;

  @property({ converter, attribute: "contain" })
  contain?: ResponsiveCssValue;

  @property({ converter, attribute: "contain-intrinsic-block-size" })
  containIntrinsicBlockSize?: ResponsiveCssValue;

  @property({ converter, attribute: "contain-intrinsic-height" })
  containIntrinsicHeight?: ResponsiveCssValue;

  @property({ converter, attribute: "contain-intrinsic-inline-size" })
  containIntrinsicInlineSize?: ResponsiveCssValue;

  @property({ converter, attribute: "contain-intrinsic-size" })
  containIntrinsicSize?: ResponsiveCssValue;

  @property({ converter, attribute: "contain-intrinsic-width" })
  containIntrinsicWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "container" })
  container?: ResponsiveCssValue;

  @property({ converter, attribute: "container-name" })
  containerName?: ResponsiveCssValue;

  @property({ converter, attribute: "container-type" })
  containerType?: ResponsiveCssValue;

  @property({ converter, attribute: "content" })
  content?: ResponsiveCssValue;

  @property({ converter, attribute: "counter-increment" })
  counterIncrement?: ResponsiveCssValue;

  @property({ converter, attribute: "counter-reset" })
  counterReset?: ResponsiveCssValue;

  @property({ converter, attribute: "counter-set" })
  counterSet?: ResponsiveCssValue;

  @property({ converter, attribute: "css-float" })
  cssFloat?: ResponsiveCssValue;

  @property({ converter, attribute: "css-text" })
  cssText?: ResponsiveCssValue;

  @property({ converter, attribute: "cursor" })
  cursor?: ResponsiveCssValue;

  @property({ converter, attribute: "cx" })
  cx?: ResponsiveCssValue;

  @property({ converter, attribute: "cy" })
  cy?: ResponsiveCssValue;

  @property({ converter, attribute: "d" })
  d?: ResponsiveCssValue;

  @property({ converter, attribute: "direction" })
  direction?: ResponsiveCssValue;

  @property({ converter, attribute: "display" })
  display?: ResponsiveCssValue;

  @property({ converter, attribute: "dominant-baseline" })
  dominantBaseline?: ResponsiveCssValue;

  @property({ converter, attribute: "empty-cells" })
  emptyCells?: ResponsiveCssValue;

  @property({ converter, attribute: "fill" })
  fill?: ResponsiveCssValue;

  @property({ converter, attribute: "fill-opacity" })
  fillOpacity?: ResponsiveCssValue;

  @property({ converter, attribute: "fill-rule" })
  fillRule?: ResponsiveCssValue;

  @property({ converter, attribute: "filter" })
  filter?: ResponsiveCssValue;

  @property({ converter, attribute: "flex" })
  flex?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-basis" })
  flexBasis?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-direction" })
  flexDirection?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-flow" })
  flexFlow?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-grow" })
  flexGrow?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-shrink" })
  flexShrink?: ResponsiveCssValue;

  @property({ converter, attribute: "flex-wrap" })
  flexWrap?: ResponsiveCssValue;

  @property({ converter, attribute: "float" })
  float?: ResponsiveCssValue;

  @property({ converter, attribute: "flood-color" })
  floodColor?: ResponsiveCssValue;

  @property({ converter, attribute: "flood-opacity" })
  floodOpacity?: ResponsiveCssValue;

  @property({ converter, attribute: "font" })
  font?: ResponsiveCssValue;

  @property({ converter, attribute: "font-display" })
  fontDisplay?: ResponsiveCssValue;

  @property({ converter, attribute: "font-family" })
  fontFamily?: ResponsiveCssValue;

  @property({ converter, attribute: "font-feature-settings" })
  fontFeatureSettings?: ResponsiveCssValue;

  @property({ converter, attribute: "font-kerning" })
  fontKerning?: ResponsiveCssValue;

  @property({ converter, attribute: "font-language-override" })
  fontLanguageOverride?: ResponsiveCssValue;

  @property({ converter, attribute: "font-optical-sizing" })
  fontOpticalSizing?: ResponsiveCssValue;

  @property({ converter, attribute: "font-size" })
  fontSize?: ResponsiveCssValue;

  @property({ converter, attribute: "font-size-adjust" })
  fontSizeAdjust?: ResponsiveCssValue;

  @property({ converter, attribute: "font-stretch" })
  fontStretch?: ResponsiveCssValue;

  @property({ converter, attribute: "font-style" })
  fontStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "font-synthesis" })
  fontSynthesis?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant" })
  fontVariant?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant-alternates" })
  fontVariantAlternates?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant-caps" })
  fontVariantCaps?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant-east-asian" })
  fontVariantEastAsian?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant-ligatures" })
  fontVariantLigatures?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variant-numeric" })
  fontVariantNumeric?: ResponsiveCssValue;

  @property({ converter, attribute: "font-variation-settings" })
  fontVariationSettings?: ResponsiveCssValue;

  @property({ converter, attribute: "font-weight" })
  fontWeight?: ResponsiveCssValue;

  @property({ converter, attribute: "gap" })
  gap?: ResponsiveCssValue;

  @property({ converter, attribute: "glyph-orientation-horizontal" })
  glyphOrientationHorizontal?: ResponsiveCssValue;

  @property({ converter, attribute: "glyph-orientation-vertical" })
  glyphOrientationVertical?: ResponsiveCssValue;

  @property({ converter, attribute: "grid" })
  grid?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-area" })
  gridArea?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-columns" })
  gridAutoColumns?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-flow" })
  gridAutoFlow?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-rows" })
  gridAutoRows?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-column" })
  gridColumn?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-column-end" })
  gridColumnEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-column-gap" })
  gridColumnGap?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-column-start" })
  gridColumnStart?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-gap" })
  gridGap?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-row" })
  gridRow?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-row-end" })
  gridRowEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-row-gap" })
  gridRowGap?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-row-start" })
  gridRowStart?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template" })
  gridTemplate?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-areas" })
  gridTemplateAreas?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-columns" })
  gridTemplateColumns?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-rows" })
  gridTemplateRows?: ResponsiveCssValue;

  @property({ converter, attribute: "hanging-punctuation" })
  hangingPunctuation?: ResponsiveCssValue;

  @property({ converter, attribute: "height" })
  height?: ResponsiveCssValue;

  @property({ converter, attribute: "hyphens" })
  hyphens?: ResponsiveCssValue;

  @property({ converter, attribute: "image-orientation" })
  imageOrientation?: ResponsiveCssValue;

  @property({ converter, attribute: "image-rendering" })
  imageRendering?: ResponsiveCssValue;

  @property({ converter, attribute: "inline-size" })
  inlineSize?: ResponsiveCssValue;

  @property({ converter, attribute: "inset" })
  inset?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-block" })
  insetBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-block-end" })
  insetBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-block-start" })
  insetBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-inline" })
  insetInline?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-inline-end" })
  insetInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "inset-inline-start" })
  insetInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "isolation" })
  isolation?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-content" })
  justifyContent?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-items" })
  justifyItems?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-self" })
  justifySelf?: ResponsiveCssValue;

  @property({ converter, attribute: "left" })
  left?: ResponsiveCssValue;

  @property({ converter, attribute: "letter-spacing" })
  letterSpacing?: ResponsiveCssValue;

  @property({ converter, attribute: "lighting-color" })
  lightingColor?: ResponsiveCssValue;

  @property({ converter, attribute: "line-break" })
  lineBreak?: ResponsiveCssValue;

  @property({ converter, attribute: "line-height" })
  lineHeight?: ResponsiveCssValue;

  @property({ converter, attribute: "list-style" })
  listStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "list-style-image" })
  listStyleImage?: ResponsiveCssValue;

  @property({ converter, attribute: "list-style-position" })
  listStylePosition?: ResponsiveCssValue;

  @property({ converter, attribute: "list-style-type" })
  listStyleType?: ResponsiveCssValue;

  @property({ converter, attribute: "margin" })
  margin?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-block" })
  marginBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-block-end" })
  marginBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-block-start" })
  marginBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-bottom" })
  marginBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-inline" })
  marginInline?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-inline-end" })
  marginInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-inline-start" })
  marginInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-left" })
  marginLeft?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-right" })
  marginRight?: ResponsiveCssValue;

  @property({ converter, attribute: "margin-top" })
  marginTop?: ResponsiveCssValue;

  @property({ converter, attribute: "marker" })
  marker?: ResponsiveCssValue;

  @property({ converter, attribute: "marker-end" })
  markerEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "marker-mid" })
  markerMid?: ResponsiveCssValue;

  @property({ converter, attribute: "marker-start" })
  markerStart?: ResponsiveCssValue;

  @property({ converter, attribute: "mask" })
  mask?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-composite" })
  maskComposite?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-image" })
  maskImage?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-mode" })
  maskMode?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-origin" })
  maskOrigin?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-position" })
  maskPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-repeat" })
  maskRepeat?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-size" })
  maskSize?: ResponsiveCssValue;

  @property({ converter, attribute: "mask-type" })
  maskType?: ResponsiveCssValue;

  @property({ converter, attribute: "max-block-size" })
  maxBlockSize?: ResponsiveCssValue;

  @property({ converter, attribute: "max-height" })
  maxHeight?: ResponsiveCssValue;

  @property({ converter, attribute: "max-inline-size" })
  maxInlineSize?: ResponsiveCssValue;

  @property({ converter, attribute: "max-width" })
  maxWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "min-block-size" })
  minBlockSize?: ResponsiveCssValue;

  @property({ converter, attribute: "min-height" })
  minHeight?: ResponsiveCssValue;

  @property({ converter, attribute: "min-inline-size" })
  minInlineSize?: ResponsiveCssValue;

  @property({ converter, attribute: "min-width" })
  minWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "mix-blend-mode" })
  mixBlendMode?: ResponsiveCssValue;

  @property({ converter, attribute: "object-fit" })
  objectFit?: ResponsiveCssValue;

  @property({ converter, attribute: "object-position" })
  objectPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "offset" })
  offset?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-anchor" })
  offsetAnchor?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-block" })
  offsetBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-block-end" })
  offsetBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-block-start" })
  offsetBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-distance" })
  offsetDistance?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-inline" })
  offsetInline?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-inline-end" })
  offsetInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-inline-start" })
  offsetInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-path" })
  offsetPath?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-position" })
  offsetPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "offset-rotate" })
  offsetRotate?: ResponsiveCssValue;

  @property({ converter, attribute: "opacity" })
  opacity?: ResponsiveCssValue;

  @property({ converter, attribute: "order" })
  order?: ResponsiveCssValue;

  @property({ converter, attribute: "orphans" })
  orphans?: ResponsiveCssValue;

  @property({ converter, attribute: "outline" })
  outline?: ResponsiveCssValue;

  @property({ converter, attribute: "outline-color" })
  outlineColor?: ResponsiveCssValue;

  @property({ converter, attribute: "outline-offset" })
  outlineOffset?: ResponsiveCssValue;

  @property({ converter, attribute: "outline-style" })
  outlineStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "outline-width" })
  outlineWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow" })
  overflow?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-anchor" })
  overflowAnchor?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-block" })
  overflowBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-clip-box" })
  overflowClipBox?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-inline" })
  overflowInline?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-wrap" })
  overflowWrap?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-x" })
  overflowX?: ResponsiveCssValue;

  @property({ converter, attribute: "overflow-y" })
  overflowY?: ResponsiveCssValue;

  @property({ converter, attribute: "overscroll-behavior" })
  overscrollBehavior?: ResponsiveCssValue;

  @property({ converter, attribute: "overscroll-behavior-block" })
  overscrollBehaviorBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "overscroll-behavior-inline" })
  overscrollBehaviorInline?: ResponsiveCssValue;

  @property({ converter, attribute: "overscroll-behavior-x" })
  overscrollBehaviorX?: ResponsiveCssValue;

  @property({ converter, attribute: "overscroll-behavior-y" })
  overscrollBehaviorY?: ResponsiveCssValue;

  @property({ converter, attribute: "padding" })
  padding?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-block" })
  paddingBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-block-end" })
  paddingBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-block-start" })
  paddingBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-bottom" })
  paddingBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-inline" })
  paddingInline?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-inline-end" })
  paddingInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-inline-start" })
  paddingInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-left" })
  paddingLeft?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-right" })
  paddingRight?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-top" })
  paddingTop?: ResponsiveCssValue;

  @property({ converter, attribute: "page" })
  page?: ResponsiveCssValue;

  @property({ converter, attribute: "page-break-after" })
  pageBreakAfter?: ResponsiveCssValue;

  @property({ converter, attribute: "page-break-before" })
  pageBreakBefore?: ResponsiveCssValue;

  @property({ converter, attribute: "page-break-inside" })
  pageBreakInside?: ResponsiveCssValue;

  @property({ converter, attribute: "paint-order" })
  paintOrder?: ResponsiveCssValue;

  @property({ converter, attribute: "perspective" })
  perspective?: ResponsiveCssValue;

  @property({ converter, attribute: "perspective-origin" })
  perspectiveOrigin?: ResponsiveCssValue;

  @property({ converter, attribute: "place-content" })
  placeContent?: ResponsiveCssValue;

  @property({ converter, attribute: "place-items" })
  placeItems?: ResponsiveCssValue;

  @property({ converter, attribute: "place-self" })
  placeSelf?: ResponsiveCssValue;

  @property({ converter, attribute: "pointer-events" })
  pointerEvents?: ResponsiveCssValue;

  @property({ converter, attribute: "position" })
  position?: ResponsiveCssValue;

  @property({ converter, attribute: "quotes" })
  quotes?: ResponsiveCssValue;

  @property({ converter, attribute: "r" })
  r?: ResponsiveCssValue;

  @property({ converter, attribute: "resize" })
  resize?: ResponsiveCssValue;

  @property({ converter, attribute: "right" })
  right?: ResponsiveCssValue;

  @property({ converter, attribute: "rotate" })
  rotate?: ResponsiveCssValue;

  @property({ converter, attribute: "row-gap" })
  rowGap?: ResponsiveCssValue;

  @property({ converter, attribute: "ruby-align" })
  rubyAlign?: ResponsiveCssValue;

  @property({ converter, attribute: "ruby-merge" })
  rubyMerge?: ResponsiveCssValue;

  @property({ converter, attribute: "ruby-position" })
  rubyPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "scale" })
  scale?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-behavior" })
  scrollBehavior?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin" })
  scrollMargin?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-block" })
  scrollMarginBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-block-end" })
  scrollMarginBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-block-start" })
  scrollMarginBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-bottom" })
  scrollMarginBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-inline" })
  scrollMarginInline?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-inline-end" })
  scrollMarginInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-inline-start" })
  scrollMarginInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-left" })
  scrollMarginLeft?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-right" })
  scrollMarginRight?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-margin-top" })
  scrollMarginTop?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding" })
  scrollPadding?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-block" })
  scrollPaddingBlock?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-block-end" })
  scrollPaddingBlockEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-block-start" })
  scrollPaddingBlockStart?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-bottom" })
  scrollPaddingBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-inline" })
  scrollPaddingInline?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-inline-end" })
  scrollPaddingInlineEnd?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-inline-start" })
  scrollPaddingInlineStart?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-left" })
  scrollPaddingLeft?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-right" })
  scrollPaddingRight?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-padding-top" })
  scrollPaddingTop?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-snap-align" })
  scrollSnapAlign?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-snap-stop" })
  scrollSnapStop?: ResponsiveCssValue;

  @property({ converter, attribute: "scroll-snap-type" })
  scrollSnapType?: ResponsiveCssValue;

  @property({ converter, attribute: "shape-image-threshold" })
  shapeImageThreshold?: ResponsiveCssValue;

  @property({ converter, attribute: "shape-margin" })
  shapeMargin?: ResponsiveCssValue;

  @property({ converter, attribute: "shape-outside" })
  shapeOutside?: ResponsiveCssValue;

  @property({ converter, attribute: "shape-rendering" })
  shapeRendering?: ResponsiveCssValue;

  @property({ converter, attribute: "size" })
  size?: ResponsiveCssValue;

  @property({ converter, attribute: "speak" })
  speak?: ResponsiveCssValue;

  @property({ converter, attribute: "src" })
  src?: ResponsiveCssValue;

  @property({ converter, attribute: "stop-color" })
  stopColor?: ResponsiveCssValue;

  @property({ converter, attribute: "stop-opacity" })
  stopOpacity?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke" })
  stroke?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-dasharray" })
  strokeDasharray?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-dashoffset" })
  strokeDashoffset?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-linecap" })
  strokeLinecap?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-linejoin" })
  strokeLinejoin?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-miterlimit" })
  strokeMiterlimit?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-opacity" })
  strokeOpacity?: ResponsiveCssValue;

  @property({ converter, attribute: "stroke-width" })
  strokeWidth?: ResponsiveCssValue;

  @property({ converter, attribute: "tab-size" })
  tabSize?: ResponsiveCssValue;

  @property({ converter, attribute: "table-layout" })
  tableLayout?: ResponsiveCssValue;

  @property({ converter, attribute: "text-align" })
  textAlign?: ResponsiveCssValue;

  @property({ converter, attribute: "text-align-last" })
  textAlignLast?: ResponsiveCssValue;

  @property({ converter, attribute: "text-anchor" })
  textAnchor?: ResponsiveCssValue;

  @property({ converter, attribute: "text-combine-upright" })
  textCombineUpright?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration" })
  textDecoration?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-color" })
  textDecorationColor?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-line" })
  textDecorationLine?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-skip" })
  textDecorationSkip?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-skip-ink" })
  textDecorationSkipInk?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-style" })
  textDecorationStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "text-decoration-thickness" })
  textDecorationThickness?: ResponsiveCssValue;

  @property({ converter, attribute: "text-emphasis" })
  textEmphasis?: ResponsiveCssValue;

  @property({ converter, attribute: "text-emphasis-color" })
  textEmphasisColor?: ResponsiveCssValue;

  @property({ converter, attribute: "text-emphasis-position" })
  textEmphasisPosition?: ResponsiveCssValue;

  @property({ converter, attribute: "text-emphasis-style" })
  textEmphasisStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "text-indent" })
  textIndent?: ResponsiveCssValue;

  @property({ converter, attribute: "text-justify" })
  textJustify?: ResponsiveCssValue;

  @property({ converter, attribute: "text-orientation" })
  textOrientation?: ResponsiveCssValue;

  @property({ converter, attribute: "text-overflow" })
  textOverflow?: ResponsiveCssValue;

  @property({ converter, attribute: "text-rendering" })
  textRendering?: ResponsiveCssValue;

  @property({ converter, attribute: "text-shadow" })
  textShadow?: ResponsiveCssValue;

  @property({ converter, attribute: "text-transform" })
  textTransform?: ResponsiveCssValue;

  @property({ converter, attribute: "text-underline-offset" })
  textUnderlineOffset?: ResponsiveCssValue;

  @property({ converter, attribute: "text-underline-position" })
  textUnderlinePosition?: ResponsiveCssValue;

  @property({ converter, attribute: "top" })
  top?: ResponsiveCssValue;

  @property({ converter, attribute: "touch-action" })
  touchAction?: ResponsiveCssValue;

  @property({ converter, attribute: "transform" })
  transform?: ResponsiveCssValue;

  @property({ converter, attribute: "transform-box" })
  transformBox?: ResponsiveCssValue;

  @property({ converter, attribute: "transform-origin" })
  transformOrigin?: ResponsiveCssValue;

  @property({ converter, attribute: "transform-style" })
  transformStyle?: ResponsiveCssValue;

  @property({ converter, attribute: "transition" })
  transition?: ResponsiveCssValue;

  @property({ converter, attribute: "transition-delay" })
  transitionDelay?: ResponsiveCssValue;

  @property({ converter, attribute: "transition-duration" })
  transitionDuration?: ResponsiveCssValue;

  @property({ converter, attribute: "transition-property" })
  transitionProperty?: ResponsiveCssValue;

  @property({ converter, attribute: "transition-timing-function" })
  transitionTimingFunction?: ResponsiveCssValue;

  @property({ converter, attribute: "unicode-bidi" })
  unicodeBidi?: ResponsiveCssValue;

  @property({ converter, attribute: "user-select" })
  userSelect?: ResponsiveCssValue;

  @property({ converter, attribute: "vector-effect" })
  vectorEffect?: ResponsiveCssValue;

  @property({ converter, attribute: "vertical-align" })
  verticalAlign?: ResponsiveCssValue;

  @property({ converter, attribute: "visibility" })
  visibility?: ResponsiveCssValue;

  @property({ converter, attribute: "white-space" })
  whiteSpace?: ResponsiveCssValue;

  @property({ converter, attribute: "widows" })
  widows?: ResponsiveCssValue;

  @property({ converter, attribute: "width" })
  width?: ResponsiveCssValue;

  @property({ converter, attribute: "will-change" })
  willChange?: ResponsiveCssValue;

  @property({ converter, attribute: "word-break" })
  wordBreak?: ResponsiveCssValue;

  @property({ converter, attribute: "word-spacing" })
  wordSpacing?: ResponsiveCssValue;

  @property({ converter, attribute: "word-wrap" })
  wordWrap?: ResponsiveCssValue;

  @property({ converter, attribute: "writing-mode" })
  writingMode?: ResponsiveCssValue;

  @property({ converter, attribute: "x" })
  x?: ResponsiveCssValue;

  @property({ converter, attribute: "y" })
  y?: ResponsiveCssValue;

  @property({ converter, attribute: "z-index" })
  zIndex?: ResponsiveCssValue;

  @property({ converter, attribute: "zoom" })
  zoom?: ResponsiveCssValue;

  protected getStyles(overrides?: Record<string, unknown>): ResponsiveCSSProperties {
    const get = (name: string) => overrides?.[name] ?? this[name as unknown as any];
    const ignore = ["constructor", "getStyles"];
    const array = Object.getOwnPropertyNames(StyledLitElement.prototype)
      .filter(name => !ignore.includes(name))
      .filter(name => get(name) !== undefined);
    const object: ResponsiveCSSProperties = {};
    array.forEach(name => {
      object[name as any] = get(name) as ResponsiveCssValue;
    });
    return object;
  }
}
