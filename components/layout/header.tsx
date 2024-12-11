"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Music2Icon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const pathname = usePathname()
  const isAuth = pathname.startsWith("/auth")
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Music2Icon className="h-6 w-6" />
          <span className="text-lg font-bold">BandSpace</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {!isAuth && !user && (
            <>
              <Link href="/pricing">
                <Button variant="ghost" className="px-4">Pricing</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="ghost" className="px-4">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button className="px-4">Get Started</Button>
              </Link>
            </>
          )}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="px-4">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-medium">
                  {user.name}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <ModeToggle/>
        </nav>
      </div>
    </header>
  )
}