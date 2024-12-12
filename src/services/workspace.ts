import { API_URL, API_ENDPOINTS } from '@/config/api';

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  members: Array<{
    id: string;
    email: string;
    role?: string;
  }>;
}

export const workspaceService = {
  async getAll(): Promise<Workspace[]> {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.workspaces}`);
    if (!response.ok) throw new Error('Failed to fetch workspaces');
    return response.json();
  },

  async getById(id: string): Promise<Workspace> {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.workspaces}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch workspace');
    return response.json();
  },

  async create(data: Pick<Workspace, 'name' | 'description'>): Promise<Workspace> {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.workspaces}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create workspace');
    return response.json();
  },
};
