export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface AudioFile {
  id: string;
  name: string;
  url: string;
  uploadedBy: Member;
  createdAt: string;
  duration: number;
}

export interface Comment {
  id: string;
  content: string;
  author: Member;
  createdAt: string;
  audioFileId: string;
}

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  members: Member[];
  audioFiles: AudioFile[];
  createdAt: string;
  updatedAt: string;
}