"use client"

import {
  KobberAccordion,
  KobberArticleLayout,
  KobberBody,
  KobberButton,
  KobberCardLayout,
  KobberCardLayoutColumnAspectRatio,
  KobberDivider,
  KobberGrid,
  KobberIngress,
  KobberList,
  KobberListItem,
} from "@gyldendal/kobber-components/react"

/**
 * Wraps all kobber components in a "use client" file to prevent SSR errors.
 */
export {
  KobberButton as Button,
  KobberCardLayout as CardLayout,
  KobberCardLayoutColumnAspectRatio as CardLayoutColumnAspectRatio,
  KobberDivider as Divider,
  KobberAccordion as Accordion,
  KobberList as List,
  KobberListItem as ListItem,
  KobberGrid as Grid,
  KobberArticleLayout as ArticleLayout,
  KobberBody as Body,
  KobberIngress as Ingress,
}
