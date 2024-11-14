"use client"

/** Only visible for md and larger devices */
export const SideMenu = ({ children }: { children: React.ReactNode }) => {
  // top-[96px] is the height of the navbar + gap
  return (
    <aside className="sticky top-[96px] hidden flex-col gap-y-[8px] border-r border-[#E5CFD3] pb-1.5 pr-2 md:flex">
      {children}
    </aside>
  )
}
