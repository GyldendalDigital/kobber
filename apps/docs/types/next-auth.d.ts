import { UserType } from "@/drizzle/drizzle"

declare module "next-auth" {
  interface Session {
    user: UserType
  }
}
