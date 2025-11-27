import type React from "react";
import * as css from "../css/button.css";

const Collection = ["brand", "rettsdata", "neutral"] as const;
type CollectionType = (typeof Collection)[number];
const Purpose = ["success", "informative", "warning"] as const;
type PurposeType = (typeof Purpose)[number];
const Level = ["primary", "secondary", "tetiary"] as const;
type LevelType = (typeof Level)[number];
const Tone = ["tone-a", "tone-b"] as const;
type ToneType = (typeof Tone)[number];

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  collection?: CollectionType;
  purpose?: PurposeType;
  level?: LevelType;
  tone?: ToneType;
}

const formatString = (str: string) => {
  str = str.replace(/-([a-z])/g, g => g[1]?.toUpperCase() || "");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getClass = (
  collection?: CollectionType,
  purpose?: PurposeType,
  level?: LevelType,
  tone?: ToneType,
) => {
  let classString = "";
  if (collection) {
    classString = classString + formatString(collection);
  }
  if (purpose) {
    classString = classString + formatString(purpose);
  }
  if (level) {
    classString = classString + formatString(level);
  }
  if (tone) {
    classString = classString + formatString(tone);
  }
  return classString.charAt(0).toLowerCase() + classString.slice(1);
};

export const Button: React.FC<ButtonType> = ({
  collection,
  purpose,
  level,
  tone,
  children,
  className = "",
  ...props
}) => {
  const derivedClassname = getClass(collection, purpose, level, tone);
  // @ts-expect-error failed attempt at getting className from props
  // biome-ignore lint/performance/noDynamicNamespaceImportAccess: ""
  const computedClass = css[derivedClassname] || "";
  const classes = `${css.button} ${className} ${computedClass}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
