import { ReactNode } from "react";

type ContentLayoutProps = {
  children: ReactNode;
};

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="grid grid-cols-[50px_1fr] md:grid-cols-[270px_1fr] w-full overflow-hidden gap-20 max-w-max-width mx-auto">
      {children}
    </div>
  );
}

export function ContentShell({ children }: ContentLayoutProps) {
  return <div className="w-full md:w-[270px]  ">{children}</div>;
}
