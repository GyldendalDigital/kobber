import type { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import clsx from "clsx";
import * as cssButton from "./css/button.css";
import * as cssButtonIcon from "./css/button-icon.css";
import * as cssButtonText from "./css/button-text.css";
import type { CollectionType, LevelType, PurposeType, ToneType } from "./types";

export interface ButtonType {
  collection?: CollectionType;
  purpose?: PurposeType;
  level?: LevelType;
  tone?: ToneType;
}

export interface ButtonIconProps {
  icon?: IconType;
}

export const formatIconName = (name: string) => {
  const rest = name.split("-", 2)[1] ?? name;
  return rest
    .split("_")
    .map(s => s[0]?.toUpperCase() + s.slice(1))
    .join("");
};

const formatClassName = (str: string) => {
  str = str.replace(/-([a-z])/g, g => g[1]?.toUpperCase() || "");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getClass = (
  collection?: CollectionType,
  purpose?: PurposeType,
  level?: LevelType,
  tone?: ToneType,
) => {
  console.log(collection, purpose, level, tone);

  let classString = "";
  if (collection) {
    classString = classString + formatClassName(collection);
  }
  if (purpose) {
    classString = classString + formatClassName(purpose);
  }
  if (level) {
    classString = classString + formatClassName(level);
  }
  if (tone) {
    classString = classString + formatClassName(tone);
  }
  return classString.charAt(0).toLowerCase() + classString.slice(1);
};

export const buttonApi = (
  collection?: CollectionType,
  purpose?: PurposeType,
  level?: LevelType,
  tone?: ToneType,
) => {
  const derivedClassname = getClass(collection, purpose, level, tone);
  // @ts-expect-error failed attempt at getting className from props
  // biome-ignore lint: biomelint/performance/noDynamicNamespaceImportAccess
  const computedClass = cssButton[derivedClassname] || cssButton.error;
  return {
    root: {
      className: clsx({
        [cssButton.button]: true,
        [computedClass]: true,
      }),
    },
  };
};

export const buttonContainerApi = () => {
  return {
    root: {
      className: clsx({
        [cssButton.buttonContainer]: true,
      }),
    },
  };
};

export const buttonIconApi = () => {
  return {
    root: {
      className: clsx({
        [cssButtonIcon.buttonIcon]: true,
      }),
    },
  };
};

export const buttonTextApi = () => {
  return {
    root: {
      className: clsx({
        [cssButtonText.buttonText]: true,
      }),
    },
  };
};
