import { useClipboard } from "../hooks/useClipboard"
import toast from "react-hot-toast"
import { Clipboard, ClipboardCheck } from "lucide-react"

interface SnippetHeaderProps {
  codeSnippet: string
}

const SnippetHeader = ({ codeSnippet }: SnippetHeaderProps) => {
  const { copied, copyToClipboard } = useClipboard()

  const handleCopy = () => {
    copyToClipboard(codeSnippet)
    toast.success("Code copied successfully.")
  }

  return (
    <div className="flex justify-between items-center rounded-t-lg py-1.5 bg-[#504265] px-4 text-slate-300 text-xs font-mono">
      <p>typescript</p>
      <button
        className="py-1 inline-flex items-center gap-x-2"
        onClick={handleCopy}
      >
        {copied ? (
          <ClipboardCheck className="size-4 shrink-0" />
        ) : (
          <Clipboard className="size-4 shrink-0" />
        )}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  )
}

export default SnippetHeader
