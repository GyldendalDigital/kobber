export const tryAddSanityHref = (pathname: string, href: string) => {
  const isExternal = href?.startsWith("http") === true

  return !isExternal && pathname.startsWith("/fra-sanity") ? "/fra-sanity" + href : href
}
