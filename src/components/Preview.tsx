import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"
import { Snippet } from "."
import { languages } from "../lib/constants"
import { cn } from "../lib/utils"
import { useOnClickOutside } from "usehooks-ts"

interface Props {
  codeSnippet: string
  language: string
  setLanguage: (value: string) => void
}

const Preview = ({ codeSnippet, language, setLanguage }: Props) => {
  const ref = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setIsDropdownOpen(false)
  }

  useOnClickOutside(ref, () => setIsDropdownOpen(false))

  return (
    <div className="relative flex flex-col h-full overflow-y-auto | bg-square">
      <div className="w-full flex justify-between items-center px-2 md:px-6 h-16 bg-black/30 backdrop-blur-[2px] border-t border-t-[#ffffff0d] shadow-inner shadow-[#ffffff0d]">
        <div
          className="flex items-center justify-between w-32 cursor-pointer text-slate-300 bg-[#2a2139] px-3 py-1.5 rounded-md"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div>{language}</div>
          <ChevronDown
            className={cn(
              "size-5 mt-1 transition-transform duration-300",
              isDropdownOpen && "rotate-180"
            )}
          />
        </div>
        {isDropdownOpen && (
          <div
            ref={ref}
            className="absolute top-full h-64 w-32 rounded-md overflow-y-scroll z-20 left-2 md:left-6 bg-[#2a2139] border-t border-t-[#ffffff0d] shadow-md"
          >
            {languages.map((lang) => (
              <div
                key={lang}
                className={cn("p-2 cursor-pointer hover:bg-[#34294f] text-slate-300", lang === language && "bg-[#382a5d] hover:bg-[#382a5d]")}
                onClick={() => handleLanguageChange(lang)}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>
      <Snippet codeSnippet={codeSnippet} language={language} />
    </div>
  )
}

export default Preview
