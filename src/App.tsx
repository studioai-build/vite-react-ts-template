import React from 'react'
import { ElementInspector } from "element-prompt-builder";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {import.meta.env.DEV && <ElementInspector />}
      <p>Start prompting (or editing) to see magic happen :)</p>
    </div>
  )
}

export default App
