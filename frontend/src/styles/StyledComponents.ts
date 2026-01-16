import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const CommentContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: #f0f2f5;
  object-fit: cover;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  color: #1c1e21;
  font-size: 0.95rem;
`;

export const CommentDate = styled.span`
  color: #65676b;
  font-size: 0.85rem;
  margin-left: auto;
`;

export const CommentText = styled.p`
  margin: 12px 0;
  color: #1c1e21;
  line-height: 1.5;
  font-size: 0.95rem;
`;

export const CommentImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-top: 12px;
`;

export const CommentActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e4e6ea;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  color: #65676b;
  font-size: 0.85rem;
`;

export const LikesCount = styled.span`
  margin-left: 4px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  padding: 6px 12px;
  border: 1px solid ${props => 
    props.variant === 'delete' ? '#e41e3f' : '#1877f2'};
  background: ${props => 
    props.variant === 'delete' ? '#fff' : '#1877f2'};
  color: ${props => 
    props.variant === 'delete' ? '#e41e3f' : 'white'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => 
      props.variant === 'delete' ? '#fff5f5' : '#166fe5'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const AddCommentForm = styled.form`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
`;

export const FormTitle = styled.h2`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background: #1877f2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 12px;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #166fe5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EditForm = styled.form`
  margin-top: 12px;
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 40px;
  color: #65676b;
  font-size: 1rem;
`;

export const ErrorMessage = styled.div`
  background: #ffebee;
  border: 1px solid #e57373;
  color: #c62828;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 0.9rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #65676b;
  
  h3 {
    margin: 0 0 8px 0;
    color: #1c1e21;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;