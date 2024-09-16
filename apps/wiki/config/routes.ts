import { RouteType, SideMenuBarType } from "@/types/types";

export const GET_STARTED_URL = "/kom-i-gang";
export const COMPONENTS_URL = "/komponenter";
export const BRANDING_URL = "/merkevare";

export const mainRoutes: RouteType[] = [
  {
    title: "Kom i gang",
    href: `${GET_STARTED_URL}/introduksjon`,
  },
  {
    title: "Merkevare",
    href: BRANDING_URL,
  },
  {
    title: "Komponenter",
    href: `${COMPONENTS_URL}/introduksjon`,
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];

export const VareMerkeRoutes: SideMenuBarType[] = [
  {
    groupTitle: "Introduksjon",
    routes: [
      {
        title: "Våre verdier",
        href: `${BRANDING_URL}/vaare-verdier`,
        isComing: true,
      },
      {
        title: "Merkevarehierarki",
        href: `${BRANDING_URL}/merkevarehierarki`,
        isComing: true,
      },
      {
        title: "Designprinsipper",
        href: `${BRANDING_URL}/designprinsipper`,
        isComing: true,
      },
    ],
  },
  {
    groupTitle: "Verktøykassa",
    routes: [
      {
        title: "Logo",
        href: `${BRANDING_URL}/logo`,
      },
      {
        title: "Farger",
        href: `${BRANDING_URL}/farger`,
        subRoutes: [
          {
            title: "Identitetspalett",
            href: `${BRANDING_URL}/farger/identitetspalett`,
          },
          {
            title: "Temafarger",
            href: `${BRANDING_URL}/farger/temafarger`,
          },
          {
            title: "UI-farger",
            href: `${BRANDING_URL}/farger/ui-farger`,
          },
        ],
      },
      {
        title: "Typografi",
        href: `${BRANDING_URL}/typografi`,
      },
      {
        title: "Ikoner",
        href: `${BRANDING_URL}/ikoner`,
      },
      {
        title: "Layout",
        href: `${BRANDING_URL}/layout`,
      },
    ],
  },
  {
    groupTitle: "Maler",
    routes: [
      {
        title: "Powerpoint",
        href: `${BRANDING_URL}/powerpoint`,
      },
      {
        title: "Word",
        href: `${BRANDING_URL}/word`,
      },
      {
        title: "E-post signatur",
        href: `${BRANDING_URL}/e-post-signatur`,
      },
      {
        title: "Visitkort",
        href: `${BRANDING_URL}/visitkort`,
      },
      {
        title: "Nyhetsbrev",
        href: `${BRANDING_URL}/nyhetsbrev`,
      },
    ],
  },
];

export const getStartedRoutes: RouteType[] = [
  {
    title: "Introduksjon",
    href: `${GET_STARTED_URL}/introduksjon`,
  },
  {
    title: "Lager du grensesnitt?",
    href: `${GET_STARTED_URL}/grensesnitt`,
  },
  {
    title: "Skriver du kode?",
    href: `${GET_STARTED_URL}/kode`,
  },
  {
    title: "Lager du innhold?",
    href: `${GET_STARTED_URL}/innhold`,
  },
  {
    title: "Markedsføring",
    href: `${GET_STARTED_URL}/markedsforing`,
  },
  {
    title: "Tilgjengelighet",
    href: `${GET_STARTED_URL}/tilgjengelighet`,
  },
];
// export const componentsRoutes: RouteType[] = [
// 	{
// 		title: "Introduksjon",
// 		href: `${COMPONENTS_URL}/introduksjon`,
// 	},
// 	{
// 		title: "Lager du grensesnitt?",
// 		href: `${COMPONENTS_URL}/grensesnitt`,
// 	},
// 	{
// 		title: "Skriver du kode?",
// 		href: `${COMPONENTS_URL}/kode`,
// 	},
// 	{
// 		title: "Lager du innhold?",
// 		href: `${COMPONENTS_URL}/innhold`,
// 	},
// 	{
// 		title: "Markedsføring",
// 		href: `${COMPONENTS_URL}/markedsforing`,
// 	},
// 	{
// 		title: "Tilgjengelighet",
// 		href: `${COMPONENTS_URL}/tilgjengelighet`,
// 	},
// ]
