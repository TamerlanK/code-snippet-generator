import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"
import { useRef } from "react"
import { languages } from "../lib/constants"
import { useOnClickOutside } from "usehooks-ts"

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  language: string
  handleLanguageChange: (value: string) => void
}

const LanguageDropdown = ({
  isOpen,
  setIsOpen,
  language,
  handleLanguageChange,
}: Props) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <>
      <div
        className="flex items-center h-full justify-between w-32 cursor-pointer text-slate-300 bg-[#2a2139] px-3 py-1.5 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{language}</div>
        <ChevronDown
          className={cn(
            "size-5 mt-1 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </div>

      {isOpen && (
        <div
          ref={ref}
          className="absolute top-full h-64 w-32 rounded-md overflow-y-scroll z-20 left-2 md:left-6 bg-[#2a2139] border-t border-t-[#ffffff0d] shadow-md"
        >
          {languages.map((lang) => (
            <div
              key={lang}
              className={cn(
                "p-2 cursor-pointer hover:bg-[#34294f] text-slate-300",
                lang === language && "bg-[#382a5d] hover:bg-[#382a5d]"
              )}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default LanguageDropdown
