import { Check, X } from "lucide-react";
import { ReactNode } from "react";

type PracticeIllustrationProps = {
  notAcceptedText: string;
  acceptedText: string;
  acceptedComponent: ReactNode;
  notAcceptedComponent: ReactNode;
};

export function PracticeIllustration({
  acceptedText,
  notAcceptedText,
  acceptedComponent,
  notAcceptedComponent,
}: PracticeIllustrationProps) {
  return (
    <div className="w-[733px] max-w-[733px] rounded-24 bg-white p-24 ">
      <div className="grid grid-cols-2 gap-[32px] w-full">
        <div className="flex flex-col justify-between gap-24 ">
          <div className="grid grid-cols-[fit-content(50px)_1fr] gap-8">
            <X className="size-5 p-0.5 text-aubergine-25 bg-red-600 rounded-full" />
            <span className="text-primary-body text-text/color/primary/label-m">{notAcceptedText}</span>
          </div>
          <div className="w-[314px] max-w-[314px] border-[1px] border-aubergine-750 bg-aubergine-25 rounded-14 p-12 flex items-center gap-16 justify-center">
            {notAcceptedComponent}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24">
          <div className="grid grid-cols-[fit-content(50px)_1fr] gap-8">
            <Check className="size-5 p-0.5 text-aubergine-25 bg-green-600 rounded-full" />
            <span className="text-primary-body text-text/color/primary/label-m">{acceptedText}</span>
          </div>
          <div className="w-[314px] max-w-[314px] border-[1px] border-aubergine-750 bg-aubergine-25 rounded-14 p-12 flex items-center gap-16 justify-center">
            {acceptedComponent}
          </div>
        </div>
      </div>
    </div>
  );
}
