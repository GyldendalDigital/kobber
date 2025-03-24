import { RouterLink } from "@/components/global/router-link"
import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"linkListBlock">

export function LinkListBlock(props: Props) {
  return (
    <div className="link-list-block flex gap-4">
      {props.links &&
        props.links.map((link, index) => (
          <RouterLink key={index} href={link.url ?? "#"} highlighted={true}>
            {link.title}
          </RouterLink>
        ))}
    </div>
  )
}
