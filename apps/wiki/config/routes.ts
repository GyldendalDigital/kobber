import { placeholderImageUrl } from "@/lib/utils";
import { RouteType, SideMenuBarType } from "@/types/types";

export const GET_STARTED_URL = "/kom-i-gang";
export const COMPONENTS_URL = "/komponenter";
export const BRANDING_URL = "/merkevare";

export type WikiRoute = {
  [slug: string]: {
    title: string;
    image?: string;
    status?: "kommer" | "nyhet";
    children?: WikiRoute;
  };
};

export const getRouteChildren = (parentRoute: WikiRoute): WikiRoute[] => {
  return Object.entries(parentRoute)
    .map(([, route]) => route.children)
    .filter(route => route !== undefined);
};

export const getStartedRoutes: RouteType[] = [
  {
    title: "Introduksjon",
    slug: `${GET_STARTED_URL}/introduksjon`,
  },
  {
    title: "Lager du grensesnitt?",
    slug: `${GET_STARTED_URL}/grensesnitt`,
  },
  {
    title: "Skriver du kode?",
    slug: `${GET_STARTED_URL}/kode`,
  },
  {
    title: "Lager du innhold?",
    slug: `${GET_STARTED_URL}/innhold`,
  },
  {
    title: "Markedsføring",
    slug: `${GET_STARTED_URL}/markedsforing`,
  },
  {
    title: "Tilgjengelighet",
    slug: `${GET_STARTED_URL}/tilgjengelighet`,
  },
];
export const mainRoutes: RouteType[] = [
  {
    title: "Kom i gang",
    slug: `${GET_STARTED_URL}/introduksjon`,
  },
  {
    title: "Merkevare",
    slug: BRANDING_URL,
  },
  {
    title: "Komponenter",
    slug: `${COMPONENTS_URL}/button`,
  },
  {
    title: "Kontakt",
    slug: "/kontakt",
  },
];

export const ComponentsRoutes: SideMenuBarType[] = [
  {
    groupTitle: "Navigasjon",
    routes: [
      {
        title: "Breadcrumb",
        slug: `${COMPONENTS_URL}/breadcrumb`,
        isComing: true,
      },
      {
        title: "Button",
        slug: `${COMPONENTS_URL}/button`,
      },
      {
        title: "Footer",
        slug: `${COMPONENTS_URL}/footer`,
        isComing: true,
      },
    ],
  },
  {
    groupTitle: "Skjema",
    routes: [
      {
        title: "Checkbox",
        slug: `${COMPONENTS_URL}/checkbox`,
      },
      {
        title: "Radiobutton",
        slug: `${COMPONENTS_URL}/radiobutton`,
      },
      {
        title: "Switch",
        slug: `${COMPONENTS_URL}/switch`,
      },

      {
        title: "Text field",
        slug: `${COMPONENTS_URL}/text-field`,
      },
    ],
  },
  {
    groupTitle: "Feedback",
    routes: [
      {
        title: "Alert",
        slug: `${COMPONENTS_URL}/alert`,
      },
      {
        title: "Labels",
        slug: `${COMPONENTS_URL}/labels`,
      },
      {
        title: "Loader",
        slug: `${COMPONENTS_URL}/loader`,
        isComing: true,
      },
      {
        title: "Progressbar",
        slug: `${COMPONENTS_URL}/progressbar`,
      },
      {
        title: "Tooltip",
        slug: `${COMPONENTS_URL}/tooltip`,
      },
    ],
  },
  {
    groupTitle: "Layout",
    routes: [
      {
        title: "Accordion",
        slug: `${COMPONENTS_URL}/accordion`,
        isComing: true,
      },
      {
        title: "Card",
        slug: `${COMPONENTS_URL}/card`,
        isComing: true,
      },
      {
        title: "Carousel",
        slug: `${COMPONENTS_URL}/carousel`,
        isComing: true,
      },
      {
        title: "List item",
        slug: `${COMPONENTS_URL}/list-item`,
        isComing: true,
      },
      {
        title: "Modal",
        slug: `${COMPONENTS_URL}/modal`,
        isComing: true,
      },
      {
        title: "Search",
        slug: `${COMPONENTS_URL}/search`,
        isComing: true,
      },
    ],
  },
];

export const VareMerkeRoutes: SideMenuBarType[] = [
  {
    groupTitle: "Introduksjon",
    routes: [
      {
        title: "Våre verdier",
        slug: `${BRANDING_URL}/vaare-verdier`,
        isComing: true,
      },
      {
        title: "Merkevarehierarki",
        slug: `${BRANDING_URL}/merkevarehierarki`,
        isComing: true,
      },
      {
        title: "Designprinsipper",
        slug: `${BRANDING_URL}/designprinsipper`,
        isComing: true,
      },
    ],
  },
  {
    groupTitle: "Verktøykassa",
    routes: [
      {
        title: "Logo",
        slug: `${BRANDING_URL}/logo`,
      },
      {
        title: "Farger",
        slug: `${BRANDING_URL}/farger`,
        subRoutes: [
          {
            title: "Identitetspalett",
            slug: `${BRANDING_URL}/farger/identitetspalett`,
          },
          {
            title: "Temafarger",
            slug: `${BRANDING_URL}/farger/temafarger`,
          },
          {
            title: "UI-farger",
            slug: `${BRANDING_URL}/farger/ui-farger`,
          },
        ],
      },
      {
        title: "Typografi",
        slug: `${BRANDING_URL}/typografi`,
        subRoutes: [
          {
            title: "PP-Mori",
            slug: `${BRANDING_URL}/typografi/pp-mori`,
          },
          {
            title: "Lyon",
            slug: `${BRANDING_URL}/typografi/lyon`,
          },
          {
            title: "Inter",
            slug: `${BRANDING_URL}/typografi/inter`,
          },
          {
            title: "Retningslinjer",
            slug: `${BRANDING_URL}/typografi/retningslinjer`,
          },
        ],
      },
      {
        title: "Ikoner",
        slug: `${BRANDING_URL}/ikoner`,
      },
      {
        title: "Layout",
        slug: `${BRANDING_URL}/layout`,
        subRoutes: [
          {
            title: "Grid",
            slug: `${BRANDING_URL}/layout/grid`,
          },
          {
            title: "Spacing",
            slug: `${BRANDING_URL}/layout/spacing`,
          },
          {
            title: "Identitetsprinsipper",
            slug: `${BRANDING_URL}/layout/identitetsprinsipper`,
          },
        ],
      },
    ],
  },
  {
    groupTitle: "Maler",
    routes: [
      {
        title: "Powerpoint",
        slug: `${BRANDING_URL}/powerpoint`,
      },
      {
        title: "Word",
        slug: `${BRANDING_URL}/word`,
      },
      {
        title: "E-post signatur",
        slug: `${BRANDING_URL}/e-post-signatur`,
      },
      {
        title: "Visitkort",
        slug: `${BRANDING_URL}/visitkort`,
      },
      {
        title: "Nyhetsbrev",
        slug: `${BRANDING_URL}/nyhetsbrev`,
      },
    ],
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
