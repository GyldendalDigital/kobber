"use client"

import {
  KobberAccordion,
  KobberButton,
  KobberCardLayout,
  KobberCardLayoutColumnAspectRatio,
  KobberDivider,
  KobberGrid,
  KobberList,
  KobberListItem,
} from "@gyldendal/kobber-components/react"

export {
  KobberButton as Button,
  KobberCardLayout as CardLayout,
  KobberCardLayoutColumnAspectRatio as CardLayoutColumnAspectRatio,
  KobberDivider as Divider,
  KobberAccordion as Accordion,
  KobberList as List,
  KobberListItem as ListItem,
  KobberGrid as Grid,
}

/**
 * Wraps all kobber components in a theme provider.
 *
 * Since kobber components requires "use client", the theme provider can't be used in the global layout.
 */

// export const Button = (props: React.ComponentProps<typeof KobberButton>) => {
//   return <KobberButton {...props} />
// }

// export const CardLayout = (props: React.ComponentProps<typeof KobberCardLayout>) => {
//   return (
//     <KobberThemeContext>
//       <KobberCardLayout {...props} />
//     </KobberThemeContext>
//   )
// }

// export const CardLayoutColumnAspectRatio = (
//   props: React.ComponentProps<typeof KobberCardLayoutColumnAspectRatio>
// ) => {
//   // removed theme context because it's already in CardLayout
//   return <KobberCardLayoutColumnAspectRatio {...props} />
// }

// export const Divider = (props: React.ComponentProps<typeof KobberDivider>) => {
//   return (
//     <KobberThemeContext>
//       <KobberDivider {...props} />
//     </KobberThemeContext>
//   )
// }

// export const Accordion = (props: React.ComponentProps<typeof KobberAccordion>) => {
//   return (
//     <KobberThemeContext>
//       <KobberAccordion {...props} />
//     </KobberThemeContext>
//   )
// }

// export const List = (props: React.ComponentProps<typeof KobberList>) => {
//   return (
//     <KobberThemeContext>
//       <KobberList {...props} />
//     </KobberThemeContext>
//   )
// }

// export const ListItem = (props: React.ComponentProps<typeof KobberListItem>) => {
//   // removed theme context because it's already in List and Accordion
//   return <KobberListItem {...props} />
// }

// export const Grid = (props: React.ComponentProps<typeof KobberGrid>) => {
//   return (
//     <KobberThemeContext>
//       <KobberGrid {...props} />
//     </KobberThemeContext>
//   )
// }
