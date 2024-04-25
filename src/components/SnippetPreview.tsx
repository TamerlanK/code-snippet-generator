import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism"
import SnippetHeader from "./SnippetHeader"

interface SnippetPreviewProps {
  codeSnippet: string
}

const SnippetPreview = ({ codeSnippet }: SnippetPreviewProps) => {
  return (
    <div className="overflow-auto flex-1">
      {codeSnippet && (
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center p-6">
          <SnippetHeader codeSnippet={codeSnippet} />
          <SyntaxHighlighter
            language="typescript"
            style={synthwave84}
            customStyle={{
              borderRadius: "0 0 8px 8px",
              margin: 0,
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}

export default SnippetPreview
