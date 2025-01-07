import { ReactNode } from "react"

type ContentLayoutProps = {
  children: ReactNode
}

/** Wraps side menu and content. Sets fixed size for sidebar when screen >= md */
export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="sidebar+main page-spacing">
      <nav className="sidebar">Sidebar</nav>
      <main className="main">{children}</main>
    </div>
  )
}
