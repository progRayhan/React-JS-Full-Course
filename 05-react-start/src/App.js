import React from 'react'
import CustomComponent from "./components/00-custom-components"
import CustomComponent2 from "./components/01-custom-components-2"
import ParentChildComponent from "./components/02-Parent-Child-Components"
import StylingWithCss from './components/03-Styling-with-CSS'
import OrganizeComponent from "./components/04-Organize-Component/Parent"

function App() {
  return (
    <div>
      <CustomComponent />
      <CustomComponent2 />
      <ParentChildComponent />
      <StylingWithCss/>
      <OrganizeComponent/>
    </div>
  )
}

export default App