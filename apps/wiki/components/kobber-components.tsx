"use client"

import {HTMLElement} from '@lit-labs/ssr-dom-shim';
globalThis.HTMLElement ??= HTMLElement;


import {
  Accordion,
  // ArticleWrapper,
  Body,
  BoxLayout,
  Button,
  CardLayout,
  CardLayoutColumnAspectRatio,
  Divider,
  Grid,
  Ingress,
  List,
  ListItem,
} from "./kobber-components-csr" // switch to "./kobber-components-ssr" to test server side rendering

import "@gyldendal/kobber-components/web-components"

// crashes on icons HTMLElement
const ArticleWrapper = ({ children }) => {
  return <kobber-article-wrapper>{children}</kobber-article-wrapper>
}

/**
 * Wraps all kobber components in a "use client" file to prevent SSR errors.
 */
export {
  Accordion,
  ArticleWrapper,
  Body,
  BoxLayout,
  Button,
  CardLayout,
  CardLayoutColumnAspectRatio,
  Divider,
  Grid,
  Ingress,
  List,
  ListItem,
}
