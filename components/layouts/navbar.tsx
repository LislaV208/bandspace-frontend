"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, MusicIcon, User } from "lucide-react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

export function Navbar() {
  const { user, isLoading } = useUser()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

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
            {isLoading || isLoggingOut ? (
              <Skeleton className="h-10 w-10 rounded-full" />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.picture || undefined} alt={user?.name || 'User avatar'} />
                      <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-2">
                    <User className="h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="gap-2" 
                    asChild
                  >
                    <a href="/api/auth/logout" className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      <span>Wyloguj się</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
