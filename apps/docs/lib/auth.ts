import MicrosoftEntraID from "@auth/core/providers/microsoft-entra-id"
import NextAuth from "next-auth"

const id = process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true, // makes the NEXTAUTH_URL env variable obsolete
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
})
