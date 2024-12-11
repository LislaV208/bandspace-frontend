"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { WorkspaceList } from "@/components/workspace/workspace-list"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth"

// Mock data - replace with actual data fetching
const workspaces = [
  {
    id: "1",
    name: "Summer Album 2024",
    description: "Working on our upcoming summer release",
    members: [],
    audioFiles: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Live Performance Tracks",
    description: "Rehearsal recordings and performance tracks",
    members: [],
    audioFiles: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export default function HomePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workspaces</h1>
          <p className="text-muted-foreground mt-2">
            Manage your band projects and collaborations
          </p>
        </div>
        <Link href="/dashboard/workspaces/new">
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            New Workspace
          </Button>
        </Link>
      </div>
      <WorkspaceList workspaces={workspaces} />
    </div>
  )
}