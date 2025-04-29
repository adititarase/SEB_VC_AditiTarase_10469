import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../theme/AuthContext';
import styled, { useTheme } from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 2rem;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 16px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.secondaryBackground || props.theme.foreground || '#333'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border || '#555'};
  background-color: ${(props) => props.theme.background || '#222'};
  color: ${(props) => props.theme.text || '#fff'};
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.primary || '#4285f4'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    background-color: ${(props) => props.theme.primaryHover || '#3367d6'};
  }
  
  &:disabled {
    background-color: ${(props) => props.theme.border || '#555'};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 8px;
`;

const BottomText = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primary || 'lightblue'};
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedUsername = username.trim();
    
    if (!trimmedUsername) {
      setError("Username is required");
      return;
    }
    
    if (!password) {
      setError("Password is required");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      console.log('Starting signup process with username:', trimmedUsername);
      await signup(trimmedUsername, password);
      console.log('Signup successful, redirecting to login page');
      
      setTimeout(() => {
        navigate('/login');
      }, 100);
    } catch (err) {
      console.error('Signup error:', err);
      
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Signup failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </Button>
        <BottomText>
          Already have an account?
          <StyledLink to="/login">Login</StyledLink>
        </BottomText>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;