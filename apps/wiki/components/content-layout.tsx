import { ReactNode } from "react"

type ContentLayoutProps = {
  children: ReactNode
}

/** Wraps side menu and content. Sets fixed size for sidebar when screen >= md */
export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="mx-auto w-full gap-x-main/gap/vertical md:grid md:grid-cols-[auto_1fr]">
      {children}
    </div>
  )
}
