import { db } from "@/drizzle/drizzle"
import { accounts, users, verificationTokens } from "@/drizzle/schema"
import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import * as Sentry from "@sentry/nextjs"
import NextAuth from "next-auth"

const id = process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    usersTable: users,
    verificationTokensTable: verificationTokens,
  }),
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,

      issuer: process.env.ISSUER_URL,
      authorization: {
        url: `https://login.microsoftonline.com/${id}/oauth2/v2.0/authorize`,
        params: {
          scope: "openid profile email User.Read",
        },
      },
      token: {
        url: `https://login.microsoftonline.com/${id}/oauth2/v2.0/token`,
      },
    }),
  ],
  logger: {
    error(code, ...message) {
      Sentry.captureException(new Error(`ERROR ${code}: ${message ? JSON.stringify(message) : ""}`))
    },
    warn(code, ...message) {
      Sentry.captureMessage(`WARNING ${code}: ${message ? JSON.stringify(message) : ""}`)
    },
    debug(code, ...message) {
      Sentry.captureMessage(`DEBUG ${code}: ${message ? JSON.stringify(message) : ""}`)
    },
  },
})
