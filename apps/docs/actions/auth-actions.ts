"use server"

import { auth } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await auth()

  if (!session || !session.user) {
    return {
      user: null,
    }
  }

  return {
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      lastName: session.user.lastName,
    },
  }
}
