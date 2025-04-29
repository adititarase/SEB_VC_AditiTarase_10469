import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);

  const runCode = async () => {
    try {
      const response = await fetch("http://localhost:8001/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      console.log(data.output);
      alert(data.output);
    } catch (error) {
      console.error(error);
      alert("Failed to run code");
    }
  };

  return (
    <div style={{ 
      maxWidth: "900px", 
      margin: "auto", 
      marginTop: "40px", 
      backgroundColor: "#121212", 
      borderRadius: "12px", 
      padding: "20px", 
      boxShadow: "0px 4px 12px rgba(0,0,0,0.5)" 
    }}>
      <h2 style={{ color: "white", marginBottom: "20px" }}>Java Code Editor</h2>

      <Editor
        height="400px"
        defaultLanguage="java"
        value={code}
        theme="vs-dark"
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          fontFamily: "monospace",
          backgroundColor: "#000000",
        }}
      />

      <button 
        onClick={runCode}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#6200ea",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
