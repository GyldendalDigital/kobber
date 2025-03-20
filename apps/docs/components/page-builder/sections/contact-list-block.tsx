import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"contactListBlock">

export function ContactListBlock(props: Props) {
  return (
    <div className="contact-list">
      hard coded contact list
    </div>
  )
}
