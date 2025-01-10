import React, { HTMLProps } from "react";
import { accordionStyles } from "./Accordion.styles";
import { accordionClassNames, accordionName, AccordionProps } from "./Accordion.core";

type Props = AccordionProps & HTMLProps<HTMLDivElement>;

export const Accordion = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, defaultExpanded, headingLevel, title, ...rest } = props;
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const dateNowAsElementId = new Date().toISOString();
  return (
    <>
      <style
        // @ts-ignore
        href={accordionName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: accordionStyles.cssText }}
      ></style>

      <div {...rest} ref={ref} className={[className, accordionClassNames(accordionName)].join(" ")} tabIndex={-1}>
        <div role="heading" aria-level={headingLevel}>
          <button onClick={() => setExpanded(!expanded)}>heading {title}</button>
          {/* <kobber-wiki-list-item
                  class="accordion-toggle-button"
                  role="button"
                  aria-expanded="${this.expanded}"
                  aria-controls="content-${dateNowAsElementId}"
                  tabindex="0"
                  @keypress="${this.handleKeyDown}"
                  @click="${this.toggle}"
                  >${this.title}
                  ${this.expanded
                    ? html`<icon-chevron_up slot="icon" />`
                    : html`<icon-chevron_down slot="icon" />`}</kobber-wiki-list-item
                > */}
          heading
        </div>

        <div
          id={`content-${dateNowAsElementId}`}
          className={accordionClassNames("accordion-content")}
          aria-hidden={!expanded}
        >
          {children}
        </div>
      </div>
    </>
  );
});
