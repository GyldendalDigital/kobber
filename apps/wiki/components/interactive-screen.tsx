import { ReactNode } from "react";

type InteractiveScreenProps = {
  children: ReactNode;
  properties: ReactNode;
};

export function InteractiveScreen({ children, properties }: InteractiveScreenProps) {
  return (
    <div className="w-[733px] max-w-[733px] grid-cols-[389px_1fr] grid gap-[24px] rounded-[16px] p-[8px] bg-white shadow-sm min-h-96">
      <div className="rounded-[16px] flex items-center justify-center gap-[24px] bg-aubergine-25">
        <div className="bg-white rounded-[16px] py-[16px] max-w-[309px] w-[309px] h-[107px] max-h-[107px] flex items-center justify-center">
          {children}
        </div>
      </div>
      {properties}
    </div>
  );
}
