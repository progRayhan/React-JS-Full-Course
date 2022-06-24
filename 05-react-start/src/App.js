import React from 'react'
import CustomComponent from "./components/00-custom-components"
import CustomComponent2 from "./components/01-custom-components-2"
import ParentChildComponent from "./components/02-Parent-Child-Components"

function App() {
  return (
    <div>
      <CustomComponent />
      <CustomComponent2 />
      <ParentChildComponent />
    </div>
  )
}

export default App