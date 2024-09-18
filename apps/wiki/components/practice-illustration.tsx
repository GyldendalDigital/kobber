import { Check, X } from "lucide-react";
import { ReactNode } from "react";

type PracticeIllustrationProps = {
  notAcceptedText: string;
  acceptedText: string;
};

export function PracticeIllustration({ acceptedText, notAcceptedText }: PracticeIllustrationProps) {
  return (
    <div className="w-[733px] max-w-[733px] rounded-[24px] bg-white p-[24px] ">
      <div className="grid grid-cols-2 gap-[32px] w-full">
        <div className="grid gap-[24px]">
          <div className="grid grid-cols-[fit-content(50px)_1fr] gap-[8px]">
            <X className="size-5 p-0.5 text-aubergine-25 bg-red-600 rounded-full" />
            <span className="text-body text-text/color/primary/label-m">{notAcceptedText}</span>
          </div>
        </div>
        <div className="grid gap-[24px]">
          <div className="grid grid-cols-[fit-content(50px)_1fr] gap-[8px]">
            <Check className="size-5 p-0.5 text-aubergine-25 bg-green-600 rounded-full" />
            <span className="text-body text-text/color/primary/label-m">{acceptedText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
