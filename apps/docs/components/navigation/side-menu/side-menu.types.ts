import { QuerySideMenuDataResult } from "@/sanity/sanity.types"

/** Reset children to make it infinitely recursive */
export type SideMenuItem = NonNullable<NonNullable<QuerySideMenuDataResult>["children"]>[number]
