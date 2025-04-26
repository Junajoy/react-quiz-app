// src/components/questions/CodeSnippet.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
