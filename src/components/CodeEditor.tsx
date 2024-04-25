import { Editor } from "@monaco-editor/react"
import { editorOptions } from "../../config"
import Spinner from "./Spinner"

interface Props {
  codeSnippet: string
  setCodeSnippet: React.Dispatch<React.SetStateAction<string>>
  language: string
}

const CodeEditor = ({
  codeSnippet,
  setCodeSnippet,
  language,
}: Props) => {
  const onCodeChange = (value: string | undefined) => {
    setCodeSnippet(value || "")
  }

  return (
    <Editor
      language={language}
      theme="vs-dark"
      value={codeSnippet}
      onChange={onCodeChange}
      options={editorOptions}
      loading={<Spinner />}
    />
  )
}

export default CodeEditor
