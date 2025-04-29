import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import CoursesView from './components/CoursesView';
import AssignmentsView from './components/AssignmentsView';
import ProgressView from './components/ProgressView';
import HelpView from './components/HelpView';
import TopicView from './components/TopicView';
import JavaInfo from './components/JavaInfo';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import { ThemeProvider } from './theme/ThemeContext';
import { AuthProvider, useAuth } from './theme/AuthContext';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  min-height: 0;
`;

export type View = 'home' | 'courses' | 'assignments' | 'progress' | 'help' | 'topic'|'quiz';

// Main App for authenticated users
const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentTopic, setCurrentTopic] = useState<string | undefined>();
  const { username } = useAuth();

  const handleViewChange = (view: View, topic?: string) => {
    setCurrentView(view);
    setCurrentTopic(topic);
  };

  const renderMainView = () => {
    switch (currentView) {
      case 'courses':
        return <CoursesView />;
      case 'assignments':
        return <AssignmentsView />;
      case 'progress':
        return <ProgressView />;
      case 'help':
        return <HelpView />;
      case 'topic':
        return <TopicView topic={currentTopic} />;
      case 'quiz':
        return <Quiz />;
      case 'home':
      default:
        return (
          <>
            <Sidebar
              onViewChange={handleViewChange}
              student_name={username ?? 'Student'}
            />
            <div style={{ flex: 1, overflow: 'auto' }}>
              <JavaInfo />
              <CodeEditor />
            </div>
          </>
        );
    }
  };

  return (
    <AppContainer>
      <Navbar currentView={currentView} onViewChange={handleViewChange} />
      <MainContent>{renderMainView()}</MainContent>
    </AppContainer>
  );
};

// Authentication routes and handling
const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={isAuthenticated ? <Quiz /> : <Navigate to="/" replace />} />
      <Route
        path="*"
        element={isAuthenticated ? <MainApp /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};

// Final App
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
