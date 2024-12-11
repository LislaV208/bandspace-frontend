"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { setCookie, deleteCookie } from "cookies-next"
import { AuthContext } from "./auth-context"
import { User } from "@/types/auth"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser = {
      id: "1",
      name: "Demo User",
      email: email
    }
    
    localStorage.setItem("user", JSON.stringify(mockUser))
    setCookie("user", JSON.stringify(mockUser))
    setUser(mockUser)
    router.push("/dashboard")
  }

  const logout = () => {
    localStorage.removeItem("user")
    deleteCookie("user")
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}