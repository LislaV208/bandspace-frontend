export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  workspaces: '/api/workspaces',
  files: '/api/files',
  comments: '/api/comments',
  users: '/api/users',
} as const;
