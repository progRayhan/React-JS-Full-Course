import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import ChildThree from './ChildThree'

function Parent() {
  return (
    <div>
        <ChildOne/>
        <ChildTwo/>
        <ChildThree/>
    </div>
  )
}

export default Parent