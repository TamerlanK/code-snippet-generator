import { FullscreenIcon } from "lucide-react"

interface Props {
  onEnter: () => Promise<void>
}

const FullscreenButton = ({ onEnter }: Props) => {
  return (
    <button
      onClick={onEnter}
      className="bg-[#2a2139] h-full aspect-square flex justify-center items-center rounded-md"
    >
      <FullscreenIcon className="size-5 text-slate-300 " />
    </button>
  )
}

export default FullscreenButton
