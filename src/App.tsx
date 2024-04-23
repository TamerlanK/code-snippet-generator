import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import SnippetPreview from "./components/SnippetPreview"
import { Plus } from "lucide-react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

const App = () => {
  const [codeSnippet, setCodeSnippet] = useState("// write your code here")

  return (
    <main className="h-screen">
      <PanelGroup direction="horizontal" className="grid grid-cols-2">
        <Panel className="min-w-[20%]">
          <CodeEditor
            codeSnippet={codeSnippet}
            setCodeSnippet={setCodeSnippet}
          />
        </Panel>
        <PanelResizeHandle />
        <Panel className="min-w-[20%]">
          <div className="flex flex-col h-full overflow-y-auto | bg-square">
            <SnippetPreview codeSnippet={codeSnippet} />
            <div className="w-full flex justify-end items-center px-6 h-16 bg-black/30 backdrop-blur-[2px] border-t border-t-[#ffffff0d]">
              <button
                disabled={!codeSnippet}
                className="px-3.5 py-2 rounded-lg text-sm bg-gradient-to-r from-[#920075] to-[#614D85] from disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="font-semibold tracking-wide text-slate-50 flex items-center gap-x-1.5">
                  <Plus className="size-5" />
                  Add Snippet
                </span>
              </button>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </main>
  )
}

export default App
