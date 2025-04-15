import { TopNav } from "@/components/navigation/top-nav"

export default async function TopNavLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <TopNav />
      {children}
    </>
  )
}
