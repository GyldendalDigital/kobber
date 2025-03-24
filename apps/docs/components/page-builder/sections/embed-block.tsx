import type { PagebuilderType } from "../page-builder.types"

type Props = PagebuilderType<"embedBlock">

export function EmbedBlock(props: Props) {
  console.log("embed", props)
  return (
    <div className="embed-block">
      <iframe
        src={props.url + "&fullscreen=true&panel=right&nav=false"}
        title="kode"
        width="100%"
        height="400"
      />
    </div>
  )
}
