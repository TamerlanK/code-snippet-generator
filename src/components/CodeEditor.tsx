import { Editor } from "@monaco-editor/react"
import { editorOptions } from "../../config"
import Spinner from "./Spinner"

interface CodeEditorProps {
  codeSnippet: string
  setCodeSnippet: React.Dispatch<React.SetStateAction<string>>
}

const CodeEditor = ({ codeSnippet, setCodeSnippet }: CodeEditorProps) => {
  const onCodeChange = (value: string | undefined) => {
    setCodeSnippet(value || "")
  }

  return (
    <Editor
      defaultLanguage="typescript"
      theme="vs-dark"
      value={codeSnippet}
      onChange={onCodeChange}
      options={editorOptions}
      loading={<Spinner />}
    />
  )
}

export default CodeEditor
