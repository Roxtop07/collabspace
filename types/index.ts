export enum UserRole {
  DEVELOPER = "developer",
  TESTER = "tester",
  CODER = "coder",
  PROGRAMMER = "programmer",
  IDEA_MEMBER = "idea_member",
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  teamIds?: string[];
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  inviteCode: string;
  ownerId: string;
  memberIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  teamId: string;
  createdAt: Date;
}

export interface FileUpload {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploaderId: string;
  teamId: string;
  createdAt: Date;
}

export interface WhiteboardData {
  id: string;
  teamId: string;
  data: string; // JSON serialized Excalidraw data
  updatedAt: Date;
}

export interface AIAssistant {
  id: string;
  teamId: string;
  conversations: AIConversation[];
}

export interface AIConversation {
  id: string;
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AIMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  createdAt: Date;
}