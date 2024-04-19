import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism"

interface SnippetPreviewProps {
  codeSnippet: string
}

const SnippetPreview = ({ codeSnippet }: SnippetPreviewProps) => {
  if (!codeSnippet) return

  return (
    <div className="overflow-y-scroll grid place-content-center">
      <SyntaxHighlighter language="javascript" style={synthwave84} >
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  )
}

export default SnippetPreview
