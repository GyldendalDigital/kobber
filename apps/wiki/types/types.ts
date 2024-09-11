export type RouteType = {
	title: string
	href: string
	disabled?: boolean
}

export type RouteDataType = {
	headerImage?: string
	topicTitle?: string
	title: string
	description: string
	text: string
	href: string
	hrefTitle: string
}

export type FeatureBoxType = {
	title: string
	image?: string
	href?: string
	onClick?: () => void
}
