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

const ThemeDropdown = ({
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
        className="flex items-center h-full justify-between w-32 cursor-pointer text-slate-300 bg-primary px-3 py-1.5 rounded-md"
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
          className="absolute bottom-full sm:top-full h-32 sm:h-64 w-32 rounded-md overflow-y-scroll z-20 left-2 md:left-6 bg-primary border-t border-t-neutral-primary shadow-md"
        >
          {languages.map((lang) => (
            <div
              key={lang}
              className={cn(
                "p-2 cursor-pointer hover:bg-secondary text-slate-300",
                lang === language && "bg-highlight hover:bg-highlight"
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

export default ThemeDropdown
