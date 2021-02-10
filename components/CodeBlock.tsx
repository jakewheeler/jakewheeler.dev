import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CodeBlock({ language, value }) {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      {value}
    </SyntaxHighlighter>
  );
}
