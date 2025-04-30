import type { PagebuilderType } from "../page-builder.types"

export type EmbedProps = { className?: string } & PagebuilderType<"embedBlock">

export function EmbedBlock(props: EmbedProps) {
  return (
    <div className={props.className}>
      <iframe
        src={props.url + "&full=false&panel=false&nav=false&instrument=false&shortcuts=false"}
        title="kode"
        width="100%"
        height={props.height ?? 200}
      />
    </div>
  )
}
