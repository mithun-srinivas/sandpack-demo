import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

const App = () => {
  const files = {}
  
  return (
    <SandpackProvider
      files={files} 
      theme="light" 
      template="react"
      theme={nightOwl}
      options={{
        classes: {
          "sp-wrapper": "custom-wrapper",
          "sp-layout": "custom-layout",
          "sp-tab-button": "custom-tab"
        },
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs showTabs />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )  
}

export default App