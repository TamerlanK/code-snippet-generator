import { Editor } from "@monaco-editor/react"
import { editorOptions } from "../../config"

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
      height="100vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      value={codeSnippet}
      onChange={onCodeChange}
      options={editorOptions}
    />
  )
}

export default CodeEditor
