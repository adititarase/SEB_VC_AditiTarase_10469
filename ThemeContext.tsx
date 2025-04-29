// src/theme/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
export const defaultTheme = {
  primary: '#007BFF',
  primaryHover: '#0056b3',
  secondaryBackground: '#f8f9fa',
  text: '#212529',
  secondaryText: '#6c757d',
  border: '#ced4da',
  background: '#ffffff',
  disabled: '#d6d8db', // Added disabled property
};

export const useTheme = () => useContext(ThemeContext);
