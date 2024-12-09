"use client"

import { PropsWithChildren } from "react"
// switch to "./kobber-components-ssr" to test server side rendering
import { ArticleWrapperVanilla } from "@gyldendal/kobber-components/vanilla"
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
} from "./kobber-components-csr"

const ArticleWrapper = ({ children }: PropsWithChildren) => {
  return <div className={ArticleWrapperVanilla.styles.test + " hei"}>{children}</div>
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
