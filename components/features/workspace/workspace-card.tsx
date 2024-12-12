import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workspace } from "@/types/workspace"
import { formatDistanceToNow } from "date-fns"
import { FolderIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

interface WorkspaceCardProps {
  workspace: Workspace
}

export function WorkspaceCard({ workspace }: WorkspaceCardProps) {
  return (
    <Link href={`/dashboard/workspaces/${workspace.id}`}>
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>{workspace.name}</CardTitle>
          <CardDescription>{workspace.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <UsersIcon className="h-4 w-4 mr-1" />
              <span>{workspace.members.length} members</span>
            </div>
            <div className="flex items-center">
              <FolderIcon className="h-4 w-4 mr-1" />
              <span>{workspace.audioFiles.length} files</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            Last updated {formatDistanceToNow(new Date(workspace.updatedAt))} ago
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}