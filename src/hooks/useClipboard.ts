import { useState } from "react"

export const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
      return true
    } catch (error) {
      console.error("Failed to copy:", error)
      return false
    }
  }

  return { copied, copyToClipboard }
}
