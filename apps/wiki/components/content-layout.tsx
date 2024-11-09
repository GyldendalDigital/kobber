import { ReactNode } from "react"

type ContentLayoutProps = {
  children: ReactNode
}

/** Wraps side menu and content. Sets fixed size for sidebar when screen >= md */
export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="mx-auto grid w-full grid-cols-[50px_1fr] gap-x-main/gap/vertical md:grid-cols-[270px_1fr]">
      {children}
    </div>
  )
}
