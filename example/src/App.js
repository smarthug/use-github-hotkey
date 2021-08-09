import React, { useEffect } from 'react'

import { ExampleComponent, useHotkey, useFuncHotkey } from 'usehotkey'
import 'usehotkey/dist/index.css'



export default function App() {

  const setTestShortcut = useHotkey("t e")
  const setFCasShortcut = useFuncHotkey(handleFCClick,"t t")

  function handleClick() {
    console.log("clicked");
  }

  // invoke this with hooks ... 
  function handleFCClick(){
    console.log("fc clicked");
  }

  useEffect(()=> {

  },[])

  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <button ref={setTestShortcut} onClick={handleClick} >press t e</button>
      <button>press t t</button>
    </div>
  )
}
