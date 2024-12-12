'use client';

import { useEffect, useState } from 'react';
import { workspaceService, Workspace } from '@/services/workspace';
import { Button } from '@/components/ui/button';

export default function WorkspacesPage() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const data = await workspaceService.getAll();
        setWorkspaces(data);
      } catch (error) {
        console.error('Failed to fetch workspaces:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkspaces();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Workspaces</h1>
        <Button>Create New Workspace</Button>
      </div>
      
      {workspaces.length === 0 ? (
        <p>No workspaces found. Create your first one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workspaces.map((workspace) => (
            <div key={workspace.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{workspace.name}</h2>
              {workspace.description && (
                <p className="text-gray-600 mt-2">{workspace.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-4">
                {workspace.members.length} members
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
