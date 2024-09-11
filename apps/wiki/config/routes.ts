import { RouteType } from "@/types/types"

export const GET_STARTED_URL = "/kom-i-gang"
export const COMPONENTS_URL = "/komponenter"
export const BRANDING_URL = "/merkevare"

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
]

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
]
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
