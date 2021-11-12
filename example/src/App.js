import React, {useRef} from 'react'
import { useHotkey, installFuncHotkey } from 'usehotkey'

export default function App() {
  // keyboard shortcut with dom
  // const setTestShortcut = useHotkey("Control+d")
  // const setTestShortcut2 = useHotkey("t a")

  // keyboard shortcut with function
  installFuncHotkey(handleTTClick, "t t")

  // installFuncHotkey(handleForm,"Control+d")
  installFuncHotkey(handleForm,"Control+d", "text-area-1")

  function handleClick() {
    alert("t e clicked");
  }

  function handleTTClick() {
    alert("t t clicked");
  }

  function handleForm(){
    alert("form worked")
  }

  return (
    <div>
      <h1>example</h1>
      {/* <button data-hotkey-scope="text-area-2"   ref={setTestShortcut} onClick={handleClick} >press "t e" to click this button with hotkey</button> */}
      <h3>press "t t" to invoke function with hotkey</h3>
      <textarea id="text-area-1"  rows="4" cols="40"></textarea>
      <textarea  id="text-area-2"  rows="4" cols="40"></textarea>
    </div>
  )
}


//id="text-area-1"