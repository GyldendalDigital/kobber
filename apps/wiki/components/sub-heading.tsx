export function SubHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h2 className={`text-primary-title-m text-[#481125ff] ${className}`}>{children}</h2>
}
