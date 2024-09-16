import { Button } from "@/components/ui/button";
import Link from "next/link";

type FargerBoxProps = {
  type: "Identitetspalett" | "Temafarger" | "UI-farger";
};

export function FargerBox({ type }: FargerBoxProps) {
  const url = `/merkevare/farger/${type.toLowerCase()}`;

  return (
    <Link href={url}>
      <div className="w-[270px] bg-zinc-100 h-[220px] rounded-[14px] overflow-hidden p-2 flex items-end justify-start ">
        <Button>{type}</Button>
      </div>
    </Link>
  );
}
