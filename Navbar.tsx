import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { View } from '../App';
import { useAuth } from '../theme/AuthContext'; // <-- Import useAuth

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: ${props => props.theme.secondaryBackground};
  border-bottom: 1px solid ${props => props.theme.border};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.text};
  margin-right: 3rem;
  cursor: pointer;

  span {
    color: ${props => props.theme.primary};
    margin-right: 0.75rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

const NavButton = styled.button<{ active?: boolean }>`
  background-color: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.secondaryText};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.active ? props.theme.primaryHover : props.theme.buttonBg};
    color: ${props => props.theme.text};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.secondaryText};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.buttonBg};
    color: ${props => props.theme.text};
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:hover {
    background-color: #d9363e;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth(); // <-- Use authentication state

  return (
    <NavbarContainer>
      <Logo onClick={() => onViewChange('home')}>
        <span>&lt;/&gt;</span>
        CodeCraft
      </Logo>
      <NavItems>
        <NavButton 
          active={currentView === 'home'} 
          onClick={() => onViewChange('home')}
        >
          🏠 Home
        </NavButton>
        <NavButton 
          active={currentView === 'courses'} 
          onClick={() => onViewChange('courses')}
        >
          📚 Courses
        </NavButton>
        <NavButton 
          active={currentView === 'assignments'} 
          onClick={() => onViewChange('assignments')}
        >
          📝 Assignments
        </NavButton>
        <NavButton 
          active={currentView === 'progress'} 
          onClick={() => onViewChange('progress')}
        >
          📊 Progress
        </NavButton>
        <NavButton 
          active={currentView === 'help'} 
          onClick={() => onViewChange('help')}
        >
          ❓ Help
        </NavButton>
        <NavButton 
          active={currentView === 'quiz'} 
          onClick={() => onViewChange('quiz')} // <-- Add Quiz navigation
        >
          🧩 Quiz
        </NavButton>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? '🌞' : '🌙'}
        </ThemeToggle>
        {isAuthenticated && (
          <LogoutButton onClick={logout}>
            Logout
          </LogoutButton>
        )}
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
