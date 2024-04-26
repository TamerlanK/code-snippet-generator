import { useState } from "react"
import { Snippet } from "."
import LanguageDropdown from "./LanguageDropdown"
import { FullscreenIcon } from "lucide-react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { cn } from "../lib/utils"
import FullscreenButton from "./FullscreenButton"

interface Props {
  codeSnippet: string
  language: string
  setLanguage: (value: string) => void
}

const Preview = ({ codeSnippet, language, setLanguage }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleFullscrenn = useFullScreenHandle()

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative flex flex-col h-full overflow-y-auto | bg-square">
      <div className="w-full flex justify-between items-center px-2 md:px-6 h-16 py-3 bg-black/30 backdrop-blur-[2px] border-t border-t-neutral-primary shadow-inner shadow-neutral-primary ">
        <LanguageDropdown
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
        <FullscreenButton onEnter={handleFullscrenn.enter} />
      </div>

      <FullScreen
        handle={handleFullscrenn}
        className={cn(
          "h-full overflow-auto",
          handleFullscrenn.active ? "bg-square p-10" : "p-6"
        )}
      >
        <Snippet codeSnippet={codeSnippet} language={language} />
      </FullScreen>
    </div>
  )
}

export default Preview
