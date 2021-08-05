import React from 'react'

import { ExampleComponent, useHotkey } from 'usehotkey'
import 'usehotkey/dist/index.css'



export default function App() {

  const setTestShortcut = useHotkey("t e")

  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <button ref={setTestShortcut} onClick={handleClick} >press t e</button>
    </div>
  )
}
