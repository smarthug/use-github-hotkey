import React, { useEffect } from 'react'

import { ExampleComponent, useHotkey, installFuncHotkey } from 'usehotkey'
import 'usehotkey/dist/index.css'



export default function App() {

  const setTestShortcut = useHotkey("t e")
  // const setFCasShortcut = useFuncHotkey(handleFCClick,"t t")
  const fef = installFuncHotkey(handleTTClick, "t t")
  const feef = installFuncHotkey(handleTFClick, "t f")

  function handleClick() {
    console.log("clicked");
  }

  // invoke this with hooks ... 
  function handleTTClick() {
    console.log("t t clicked");
  }

  function handleTFClick() {
    console.log("t f clicked");
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <button ref={setTestShortcut} onClick={handleClick} >press t e</button>
      <button>press t t</button>
    </div>
  )
}
