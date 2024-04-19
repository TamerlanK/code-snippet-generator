import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Clipboard, ClipboardCheck } from "lucide-react"
import { useState } from "react"

interface SnippetPreviewProps {
  codeSnippet: string
}

const SnippetPreview = ({ codeSnippet }: SnippetPreviewProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    } catch (error: any) {
      console.error("Failed to copy", error.message)
    }
  }

  if (!codeSnippet) return

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 rounded-md max-w-3xl w-full overflow-auto h-full">
        <div className="flex justify-between items-center rounded-t-lg py-1.5 bg-[#504265] px-4 text-slate-300 text-xs font-mono">
          <p>tsx</p>
          <button
            className="py-1 inline-flex items-center gap-x-2"
            onClick={handleCopy}
          >
            {isCopied ? (
              <ClipboardCheck className="size-4 shrink-0" />
            ) : (
              <Clipboard className="size-4 shrink-0" />
            )}
            <span>{isCopied ? "Copied" : "Copy code"}</span>
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
    </div>
  )
}

export default SnippetPreview
