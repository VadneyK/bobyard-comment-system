import React, { useState } from 'react';
import { format } from 'date-fns';
import { Comment as CommentType } from '../types/Comment';
import {
  CommentContainer,
  CommentHeader,
  Avatar,
  AuthorName,
  CommentDate,
  CommentText,
  CommentImage,
  CommentActions,
  LikesContainer,
  LikesCount,
  ActionButtons,
  ActionButton,
  EditForm,
  TextArea,
  SubmitButton,
} from '../styles/StyledComponents';

interface CommentProps {
  comment: CommentType;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  onUpdate,
  onDelete,
  isLoading = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(comment.text);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onUpdate(comment.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(comment.text);
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy \'at\' h:mm a');
    } catch {
      return 'Invalid date';
    }
  };

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    comment.author
  )}&background=1877f2&color=fff&size=40`;

  return (
    <CommentContainer>
      <CommentHeader>
        <Avatar 
          src={comment.image || defaultAvatar} 
          alt={`${comment.author}'s avatar`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultAvatar;
          }}
        />
        <AuthorName>{comment.author}</AuthorName>
        <CommentDate>{formatDate(comment.date)}</CommentDate>
      </CommentHeader>

      {isEditing ? (
        <EditForm onSubmit={handleSave}>
          <TextArea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            disabled={isLoading}
            placeholder="Edit your comment..."
            autoFocus
          />
          <ActionButtons style={{ marginTop: '12px' }}>
            <SubmitButton type="submit" disabled={isLoading || !editText.trim()}>
              {isLoading ? 'Saving...' : 'Save'}
            </SubmitButton>
            <ActionButton type="button" onClick={handleCancel} disabled={isLoading}>
              Cancel
            </ActionButton>
          </ActionButtons>
        </EditForm>
      ) : (
        <>
          <CommentText>{comment.text}</CommentText>
          {comment.image && (
            <CommentImage src={comment.image} alt="Comment attachment" />
          )}
        </>
      )}

      <CommentActions>
        <LikesContainer>
          <span>👍</span>
          <LikesCount>{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</LikesCount>
        </LikesContainer>

        {!isEditing && (
          <ActionButtons>
            <ActionButton onClick={handleEdit} disabled={isLoading}>
              Edit
            </ActionButton>
            <ActionButton 
              variant="delete" 
              onClick={() => onDelete(comment.id)}
              disabled={isLoading}
            >
              Delete
            </ActionButton>
          </ActionButtons>
        )}
      </CommentActions>
    </CommentContainer>
  );
};