"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MusicIcon } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MusicIcon className="h-6 w-6" />
              <span className="text-xl font-bold">BandSpace</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
