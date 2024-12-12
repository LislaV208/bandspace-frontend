import { useState, useEffect } from 'react';
import { workspaceService, Workspace } from '@/services/workspace';

export function useWorkspace(id?: string) {
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchWorkspace = async () => {
      try {
        setIsLoading(true);
        const data = await workspaceService.getById(id);
        setWorkspace(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch workspace'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkspace();
  }, [id]);

  return { workspace, isLoading, error };
}
