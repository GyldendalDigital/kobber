export const isOnPath = (pathName: string, href: string) => {
	if (pathName.includes(href)) {
		return true
	}
	return false
}
