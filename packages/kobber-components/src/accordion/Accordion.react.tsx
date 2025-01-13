import React, { HTMLProps } from "react";
import { accordionStyles } from "./Accordion.styles";
import { accordionClassNames, accordionName, AccordionProps } from "./Accordion.core";
import { ListItem } from "../list/ListItem.react";

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
          <ListItem
            icon={expanded ? iconExpanded() : iconNotExpanded()}
            onClick={() => setExpanded(!expanded)}
            tabIndex={0}
            aria-controls={`content-${dateNowAsElementId}`}
            aria-expanded={expanded}
            role="button"
          >
            {title}
          </ListItem>
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

const iconExpanded = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <g clip-path="url(#a)">
      <path
        fill="#000"
        d="M.625 14.953a.627.627 0 0 1-.442-1.068L9.12 4.95a1.243 1.243 0 0 1 1.766-.002l8.936 8.937a.627.627 0 0 1-.681 1.021.619.619 0 0 1-.203-.136l-8.935-8.936-8.935 8.936a.618.618 0 0 1-.442.183Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

const iconNotExpanded = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <g clip-path="url(#a)">
      <path
        fill="#000"
        d="M10 15.835c-.334 0-.647-.13-.883-.365L.183 6.534a.62.62 0 0 1 0-.884.62.62 0 0 1 .884 0l8.932 8.935 8.933-8.935a.62.62 0 0 1 .883 0 .619.619 0 0 1 0 .884l-8.933 8.935a1.242 1.242 0 0 1-.883.366Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
