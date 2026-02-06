import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function CodeHighlighter({ language, code }: { language?: string; code: any }) {
  return (
    <SyntaxHighlighter language={language} style={a11yDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
