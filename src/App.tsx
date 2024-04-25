import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { useMediaQuery } from "usehooks-ts"
import { CodeEditor, Preview } from "./components"

const DEFAULT_CODE = "// Write your code here"

const App = () => {
  const [language, setLanguage] = useState("typescript")

  const [codeSnippet, setCodeSnippet] = useState(DEFAULT_CODE)

  const isMobile = useMediaQuery("(max-width: 639px)")

  return (
    <main className="h-screen">
      <PanelGroup direction={isMobile ? "vertical" : "horizontal"}>
        <Panel className="min-w-[250px] min-h-[200px]">
          <CodeEditor
            codeSnippet={codeSnippet}
            setCodeSnippet={setCodeSnippet}
            language={language}
          />
        </Panel>
        <PanelResizeHandle className="w-full h-3 sm:h-full sm:w-3 flex justify-center items-center bg-neutral-800 -mt-[0.5px] sm:-ml-[0.5px]">
          <div className="h-full w-12 sm:h-12 sm:w-full bg-slate-200 rounded-full" />
        </PanelResizeHandle>
        <Panel className="min-w-[250px] min-h-[200px] m-0">
          <Preview
            codeSnippet={codeSnippet}
            language={language}
            setLanguage={setLanguage}
          />
        </Panel>
      </PanelGroup>
      <Toaster />
    </main>
  )
}

export default App
