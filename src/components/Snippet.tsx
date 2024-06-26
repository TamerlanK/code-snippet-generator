import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism"
import SnippetHeader from "./SnippetHeader"

interface Props {
  codeSnippet: string
  language: string
}

const Snippet = ({ codeSnippet, language }: Props) => {
  return (
    <>
      {codeSnippet && (
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
          <SnippetHeader codeSnippet={codeSnippet} language={language} />
          <SyntaxHighlighter
            language={language}
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
    </>
  )
}

export default Snippet
