// src/theme/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryHover: string;
    background: string;
    secondaryBackground: string;
    text: string;
    secondaryText: string;
    border: string;
    buttonBg: string;
    buttonHover: string;
    editorBg: string;
    outputBg: string;
    foreground: string; 
    danger: string;  // Add danger property type definition
  }
}
