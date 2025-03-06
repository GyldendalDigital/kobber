import { FunctionComponent } from "react";
import { internalIconsStyles } from "../InternalIcons.styles.react";

type Props = { "aria-label"?: string };

export const IconFormRadio: FunctionComponent<Props> = props => {
  const ariaLabel =
    props["aria-label"] || ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
  const ariaHidden = ariaLabel === "";
  const role = ariaHidden ? "presentation" : "img";
  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style
        href={"internalIconsStyles"}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: internalIconsStyles.cssText }}
      ></style>
      <svg viewBox="0 0 10 11" aria-label={ariaLabel} aria-hidden={ariaHidden} role={role}>
        <circle cx="5" cy="5.5" r="5" fill="currentColor"></circle>
      </svg>
    </>
  );
};
