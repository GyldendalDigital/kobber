import { ReactNode } from "react"
import { Check, X } from "lucide-react"

type PracticeIllustrationProps = {
  notAcceptedText: string
  acceptedText: string
  acceptedComponent: ReactNode
  notAcceptedComponent: ReactNode
}

export function PracticeIllustration({
  acceptedText,
  notAcceptedText,
  acceptedComponent,
  notAcceptedComponent,
}: PracticeIllustrationProps) {
  return (
    <div className="px-4">
      <div className="w-[733px] max-w-[733px] rounded-3xl bg-white p-24">
        <div className="grid w-full grid-cols-2 gap-[32px]">
          <div className="flex flex-col justify-between gap-24">
            <div className="grid grid-cols-[fit-content(50px)_1fr] gap-8">
              <X className="size-5 rounded-full bg-red-600 p-0.5 text-[#FDF9F9]" />
              <span className="text-primary-body text-[#481125ff]">{notAcceptedText}</span>
            </div>
            <div className="flex w-[314px] max-w-[314px] items-center justify-center gap-16 rounded-2xl border border-[#691837] bg-[#FDF9F9] p-12">
              {notAcceptedComponent}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-24">
            <div className="grid grid-cols-[fit-content(50px)_1fr] gap-8">
              <Check className="size-5 rounded-full bg-green-600 p-0.5 text-[#FDF9F9]" />
              <span className="text-primary-body text-[#481125ff]">{acceptedText}</span>
            </div>
            <div className="flex w-[314px] max-w-[314px] items-center justify-center gap-16 rounded-2xl border border-[#691837] bg-[#FDF9F9] p-12">
              {acceptedComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
