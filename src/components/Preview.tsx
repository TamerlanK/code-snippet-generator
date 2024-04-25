import { useState } from "react"
import { Snippet } from "."
import LanguageDropdown from "./LanguageDropdown"

interface Props {
  codeSnippet: string
  language: string
  setLanguage: (value: string) => void
}

const Preview = ({ codeSnippet, language, setLanguage }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative flex flex-col h-full overflow-y-auto | bg-square">
      <div className="w-full flex justify-between items-center px-2 md:px-6 h-16 py-3 bg-black/30 backdrop-blur-[2px] border-t border-t-[#ffffff0d] shadow-inner shadow-[#ffffff0d]">
        <LanguageDropdown
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
      </div>

      <Snippet codeSnippet={codeSnippet} language={language} />
    </div>
  )
}

export default Preview
