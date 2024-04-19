import { EditorProps } from "@monaco-editor/react"

export const editorOptions: EditorProps["options"] = {
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  wordWrap: "on",
  lineNumbers: "on",
  insertSpaces: false,
  tabSize: 4,
  autoIndent: "full",
  formatOnType: true,
  formatOnPaste: true,
  detectIndentation: true,
  scrollbar: {
    vertical: "auto",
    horizontal: "auto",
  },
}
