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
      {/* TODO: Add hover effect to button */}
      <button
        disabled={disabled}
        onClick={handleAddSnippet}
        className="px-3.5 py-2 rounded-lg text-sm bg-gradient-to-r from-[#920075] to-[#614D85] from disabled:cursor-not-allowed disabled:opacity-50 w-full md:w-fit flex justify-center"
      >
        <span className="font-semibold tracking-wide text-slate-50 flex items-center gap-x-1.5">
          <Plus className="size-5" />
          Add Snippet
        </span>
      </button>
    </div>
  )
}

export default SnippetPreviewFooter
