import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';



const CodeEditor = () => {
  const defaultCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

  const [code, setCode] = useState(defaultCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleGithubRedirect = () => {
    window.location.href = 'https://github.com/pratikraj315/react-simple-code-editor';
  };

  return (
    <div className="code-editor-container">
      <div className="editor-wrapper">
        <Highlight
          theme={themes.dracula}
          code={code}
          language="javascript"
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className="code-highlight" style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <textarea
          className="code-input"
          value={code}
          onChange={handleChange}
          spellCheck="false"
        />
      </div>
      <button className="github-button" onClick={handleGithubRedirect}>
        GitHub
      </button>
    </div>
  );
};

export default CodeEditor;
