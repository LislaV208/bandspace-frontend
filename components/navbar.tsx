"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MusicIcon } from "lucide-react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { user, isLoading } = useUser()

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
            {user ? (
              <a href="/api/auth/logout">
                  <Button variant="ghost">Log out</Button>
                </a>
            ) : (
                <a href="/api/auth/login">
                  <Button variant="ghost">Log in</Button>
                </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
