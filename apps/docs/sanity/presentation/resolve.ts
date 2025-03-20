import { defineLocations, PresentationPluginOptions } from "sanity/presentation"

/** https://www.sanity.io/docs/configuring-the-presentation-tool */
export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/posts/${doc?.slug}`,
          },
          { title: "Posts index", href: `/posts` },
        ],
      }),
    }),
  },
}
