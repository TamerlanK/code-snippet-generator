import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import SnippetPreview from "./components/SnippetPreview"

const App = () => {
  const [codeSnippet, setCodeSnippet] = useState("// write your code here")

  return (
    <main className="h-screen grid grid-cols-2">
      <CodeEditor codeSnippet={codeSnippet} setCodeSnippet={setCodeSnippet} />
      <SnippetPreview codeSnippet={codeSnippet} />
    </main>
  )
}

export default App
