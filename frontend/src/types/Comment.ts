export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  likes: number;
  image?: string;
}

export interface CommentFormData {
  text: string;
}