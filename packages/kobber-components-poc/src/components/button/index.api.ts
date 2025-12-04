import clsx from "clsx";
import * as cssButton from "./css/button.css";
import { CollectionType, PurposeType, LevelType, ToneType } from "./types";

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
  console.log(collection, purpose, level, tone);

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

export const buttonApi = (
  collection?: CollectionType,
  purpose?: PurposeType,
  level?: LevelType,
  tone?: ToneType,
) => {
  const derivedClassname = getClass(collection, purpose, level, tone);
  // @ts-expect-error failed attempt at getting className from props
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
