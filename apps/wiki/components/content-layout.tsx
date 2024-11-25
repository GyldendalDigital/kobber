import { ReactNode } from "react"

type ContentLayoutProps = {
  children: ReactNode
}

/** Wraps side menu and content. Sets fixed size for sidebar when screen >= md */
export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="relative mx-auto w-full">
      {children}
    </div>
  )
}
