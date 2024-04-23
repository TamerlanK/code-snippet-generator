import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import CodeEditor from "./components/CodeEditor"
import SnippetPreview from "./components/SnippetPreview"
import SnippetPreviewFooter from "./components/SnippetPreviewFooter"
import { useMediaQuery } from "usehooks-ts"
import { Toaster, toast } from "react-hot-toast"

const App = () => {
  const [codeSnippet, setCodeSnippet] = useState("// write your code here")

  const isMobile = useMediaQuery("(max-width: 639px)")

  const handleAddSnippet = () => {
    console.log(codeSnippet)
  }

  return (
    <main className="h-screen">
      <PanelGroup
        direction={isMobile ? "vertical" : "horizontal"}
        className="sm:flex"
      >
        <Panel className="min-w-[250px] min-h-[200px]">
          <CodeEditor
            codeSnippet={codeSnippet}
            setCodeSnippet={setCodeSnippet}
          />
        </Panel>
        <PanelResizeHandle className="w-full h-3 sm:h-full sm:w-3 flex justify-center items-center bg-neutral-800 sm:-ml-[0.5px]">
          <div className="h-full w-12 sm:h-12 sm:w-full bg-slate-200 rounded-full" />
        </PanelResizeHandle>
        <Panel className="min-w-[250px] min-h-[200px] m-0">
          <div className="flex flex-col h-full overflow-y-auto | bg-square">
            <SnippetPreview codeSnippet={codeSnippet} />
            <SnippetPreviewFooter
              disabled={!codeSnippet}
              handleAddSnippet={handleAddSnippet}
            />
          </div>
        </Panel>
      </PanelGroup>
      <Toaster />
    </main>
  )
}

export default App
