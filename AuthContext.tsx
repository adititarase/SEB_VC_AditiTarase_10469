import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = 'http://localhost:8001';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUsername(user.username);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      console.log(`Attempting to login with username: ${username}`);
      
      // Use only the regular auth endpoint
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { 
        username, 
        password 
      });
      
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify({ 
          username: response.data.username,
          token: response.data.token
        }));
        
        setIsAuthenticated(true);
        setUsername(response.data.username);
        console.log('Login successful via auth endpoint');
        return;
      }
      
      throw new Error('Login failed');
    } catch (error) {
      console.error('Login error:', error);
      
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.error || error.response.data.message || 'Invalid credentials';
        throw new Error(errorMessage);
      }
      
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  };

  const signup = async (username: string, password: string) => {
    try {
      console.log(`Attempting to signup with username: ${username}`);
      
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        username: username.trim(),
        password
      });
      
      console.log('Signup response:', response.data);
      
      if (response.data.success) {
        console.log('Signup successful');
        return response.data;
      } else {
        throw new Error(response.data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.error || error.response.data.message || 'Signup failed';
        throw new Error(errorMessage);
      }
      
      throw new Error('Signup failed. Please try again later.');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
