import { cn } from "@/lib/utils"
import styles from "./content-layout.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  maxWidthSettings?: "read" | "full"
}

export function ContentLayout({ children, className, maxWidthSettings = "read", ...rest }: Props) {
  return (
    <div
      className={cn(
        styles["content-layout"],
        maxWidthSettings === "read" && styles["read-with"],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
