import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MarkDownComponent from "./components/MarkDownComponent";
import "./index.css";
import { EditorProvider } from "./state/contexts/EditorContext";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdown = `
\`\`\`js
const a = 1;
\`\`\`
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EditorProvider>
    {/* <ReactMarkdown
    children={markdown}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />, */}
  {/* <MarkDownComponent markdown={markdown}/> */}
  <App/>
    </EditorProvider>
  </React.StrictMode>
);
