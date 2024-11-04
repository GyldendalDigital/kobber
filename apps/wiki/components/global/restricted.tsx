"use client"

import { signIn } from "next-auth/react"
import { FaMicrosoft } from "react-icons/fa"
import { Button } from "../ui/button"

export function Restricted() {
  const handleLogin = () => {
    signIn("microsoft-entra-id", {
      // redirect: true,
      // redirectTo: "/",
    })
  }

  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-2">
      <h1 className="text-2xl">Vennligst logg inn</h1>
      <Button
        onClick={handleLogin}
        className="flex h-10 items-center gap-2 rounded-md bg-white p-2 px-8"
        variant={"outline"}
      >
        <FaMicrosoft className="size-4" />
        Logg inn med SSO
      </Button>
    </div>
  )
}
