import axios from 'axios';
import { Comment, CommentFormData } from '../types/Comment';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const commentService = {
  // Get all comments
  getComments: async (): Promise<Comment[]> => {
    const response = await api.get<Comment[]>('/comments/');
    return response.data;
  },

  // Create a new comment
  createComment: async (commentData: CommentFormData): Promise<Comment> => {
    const response = await api.post<Comment>('/comments/', commentData);
    return response.data;
  },

  // Update an existing comment
  updateComment: async (id: string, commentData: Partial<CommentFormData>): Promise<Comment> => {
    const response = await api.patch<Comment>(`/comments/${id}/`, commentData);
    return response.data;
  },

  // Delete a comment
  deleteComment: async (id: string): Promise<void> => {
    await api.delete(`/comments/${id}/`);
  },
};

export default api;