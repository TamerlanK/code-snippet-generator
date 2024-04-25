import { Plus } from "lucide-react"

interface SnippetPreviewFooterProps {
  handleAddSnippet: () => void
  disabled: boolean
}

const SnippetPreviewFooter = ({
  disabled,
  handleAddSnippet,
}: SnippetPreviewFooterProps) => {
  return (
    <div className="w-full flex justify-center md:justify-end items-center px-2 md:px-6 h-16 bg-black/30 backdrop-blur-[2px] border-t border-t-[#ffffff0d] shadow-inner shadow-[#ffffff0d]">
      <button
        disabled={disabled}
        onClick={handleAddSnippet}
        className="w-full md:w-fit flex justify-center px-3 py-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-50 transition-background-position duration-1000 bg-gradient-to-r from-[#614d85] via-[#952676] to-[#2d1854] bg-left bg-300% hover:bg-right hover:scale-[1.01] active:scale-[0.98] disabled:hover:bg-left disabled:hover:scale-100"
      >
        <span className="tracking-wider text-slate-50 flex items-center gap-x-1.5 text-sm">
          <Plus className="size-5" />
          Add Snippet
        </span>
      </button>
    </div>
  )
}

export default SnippetPreviewFooter
