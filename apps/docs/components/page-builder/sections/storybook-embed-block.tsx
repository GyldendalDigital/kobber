import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"storybookEmbedBlock">

export function StorybookEmbedBlock(props: Props) {
  return (
    <div className="stobook">
      iframe
    </div>
  )
}
