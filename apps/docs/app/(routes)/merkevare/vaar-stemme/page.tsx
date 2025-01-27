import { metaBrandVaarStemme } from "./stemme.meta"

export const metadata = metaBrandVaarStemme

export default function VaarStemmePage() {
  return <div>{metaBrandVaarStemme.title as string}</div>
}
