import React from 'react'
import { useHotkey, installFuncHotkey } from 'usehotkey'

export default function App() {
  // keyboard shortcut with dom
  const setTestShortcut = useHotkey("t e")

  // keyboard shortcut with function
  installFuncHotkey(handleTTClick, "t t")

  function handleClick() {
    alert("t e clicked");
  }

  function handleTTClick() {
    alert("t t clicked");
  }

  return (
    <div>
      <h1>example</h1>
      <button ref={setTestShortcut} onClick={handleClick} >press "t e" to click this button with hotkey</button>
      <h3>press "t t" to invoke function with hotkey</h3>
      <textarea id="text-area-1"  rows="4" cols="40"> text area 1</textarea>
    </div>
  )
}
