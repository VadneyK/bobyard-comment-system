import React, { useState } from 'react';
import {
  AddCommentForm,
  FormTitle,
  TextArea,
  SubmitButton,
} from '../styles/StyledComponents';

interface AddCommentProps {
  onAdd: (text: string) => void;
  isLoading?: boolean;
}

export const AddComment: React.FC<AddCommentProps> = ({ onAdd, isLoading = false }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <AddCommentForm onSubmit={handleSubmit}>
      <FormTitle>Add a new comment</FormTitle>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind? Share your thoughts..."
        disabled={isLoading}
        rows={3}
      />
      <SubmitButton type="submit" disabled={isLoading || !text.trim()}>
        {isLoading ? 'Posting...' : 'Post Comment'}
      </SubmitButton>
    </AddCommentForm>
  );
};