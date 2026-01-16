import React, { useState, useEffect } from 'react';
import { Comment as CommentComponent } from './components/Comment';
import { AddComment } from './components/AddComment';
import { Comment as CommentType } from './types/Comment';
import { commentService } from './services/commentService';
import {
  AppContainer,
  Header,
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
} from './styles/StyledComponents';

function App() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await commentService.getComments();
      setComments(data);
    } catch (err) {
      console.error('Error loading comments:', err);
      setError('Failed to load comments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (text: string) => {
    try {
      setActionLoading(true);
      setError(null);
      const newComment = await commentService.createComment({ text });
      setComments(prevComments => [newComment, ...prevComments]);
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdateComment = async (id: string, text: string) => {
    try {
      setActionLoading(true);
      setError(null);
      const updatedComment = await commentService.updateComment(id, { text });
      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === id ? updatedComment : comment
        )
      );
    } catch (err) {
      console.error('Error updating comment:', err);
      setError('Failed to update comment. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteComment = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      setActionLoading(true);
      setError(null);
      await commentService.deleteComment(id);
      setComments(prevComments =>
        prevComments.filter(comment => comment.id !== id)
      );
    } catch (err) {
      console.error('Error deleting comment:', err);
      setError('Failed to delete comment. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <AppContainer>
        <Header>Comments</Header>
        <LoadingSpinner>Loading comments...</LoadingSpinner>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Header>Comments</Header>
      
      {error && (
        <ErrorMessage>
          {error}
          <button 
            onClick={loadComments}
            style={{ 
              marginLeft: '10px', 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              textDecoration: 'underline',
              cursor: 'pointer' 
            }}
          >
            Retry
          </button>
        </ErrorMessage>
      )}

      <AddComment onAdd={handleAddComment} isLoading={actionLoading} />

      {comments.length === 0 ? (
        <EmptyState>
          <h3>No comments yet</h3>
          <p>Be the first to share your thoughts!</p>
        </EmptyState>
      ) : (
        <>
          {comments.map((comment) => (
            <CommentComponent
              key={comment.id}
              comment={comment}
              onUpdate={handleUpdateComment}
              onDelete={handleDeleteComment}
              isLoading={actionLoading}
            />
          ))}
        </>
      )}
    </AppContainer>
  );
}

export default App;
