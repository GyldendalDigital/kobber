import { ReactNode } from "react"

type ContentLayoutProps = {
  children: ReactNode
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="mx-auto grid w-full max-w-max-width grid-cols-[50px_1fr] gap-[24px] overflow-hidden md:grid-cols-[270px_1fr]">
      {children}
    </div>
  )
}

export function ContentShell({ children }: ContentLayoutProps) {
  return <div className="w-full md:w-[270px]">{children}</div>
}
