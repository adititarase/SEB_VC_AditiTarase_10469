declare module '@monaco-editor/react' {
  import * as React from 'react';
  export interface EditorProps {
    height?: string | number;
    defaultLanguage?: string;
    value?: string;
    onChange?: (value?: string) => void;
    theme?: string;
    options?: any;
  }
  const Editor: React.FC<EditorProps>;
  export default Editor;
}
