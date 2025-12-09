export const Collection = ["brand", "rettsdata", "neutral"] as const;
export type CollectionType = (typeof Collection)[number];
export const Purpose = ["success", "informative", "warning"] as const;
export type PurposeType = (typeof Purpose)[number];
export const Level = ["primary", "secondary", "tertiary"] as const;
export type LevelType = (typeof Level)[number];
export const Tone = ["tone-a", "tone-b"] as const;
export type ToneType = (typeof Tone)[number];
