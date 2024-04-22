import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Clipboard, ClipboardCheck } from "lucide-react"
import { useClipboard } from "../hooks/useClipboard"

interface SnippetPreviewProps {
  codeSnippet: string
}

const SnippetPreview = ({ codeSnippet }: SnippetPreviewProps) => {
  const { copied, copyToClipboard } = useClipboard()

  const handleCopy = () => copyToClipboard(codeSnippet)

  return (
    <div className="overflow-auto | bg-square">
      {codeSnippet && (
        <div className="px-6 rounded-md max-w-3xl mx-auto h-full flex flex-col justify-center">
          <div className="flex justify-between items-center rounded-t-lg py-1.5 bg-[#504265] px-4 text-slate-300 text-xs font-mono">
            <p>tsx</p>
            <button
              className="py-1 inline-flex items-center gap-x-2"
              onClick={handleCopy}
            >
              {copied ? (
                <ClipboardCheck className="size-4 shrink-0" />
              ) : (
                <Clipboard className="size-4 shrink-0" />
              )}
              <span>{copied ? "Copied" : "Copy code"}</span>
            </button>
          </div>
          <SyntaxHighlighter
            language="tsx"
            style={synthwave84}
            customStyle={{ borderRadius: "0 0 8px 8px", margin: 0 }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}

export default SnippetPreview
