import { useEffect, useState } from 'react'
import { install, uninstall } from "@github/hotkey"
import { doc } from 'prettier'

// export const shortcutMappingObj = {
//   showCommandPalette: "Control+P",
// };
console.log("wtf")
const buttonProto = {
  scope: null,
  get getAttribute() {
    console.log(this.scope)
    if (this.scope === null) {

      return () => null
    } else {

      // return () => this.scope
      console.log(this.scope)
      return () => this.scope
    }
  },
  get dispatchEvent() {
    return mockDispatchEvent
  }
}


export function useHotkey(shortcut = null) {
  const [element, setElement] = useState(null);


  useEffect(() => {
    if (shortcut) {
      element && install(element, shortcut)
    }
    return () => {
      uninstall(element)
      // element && uninstall(element)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])
  return setElement
}


function mockDispatchEvent() {

  return true
}

// data-key-scope 를 하나 더 넣어줄까 인자로 ???
export function installFuncHotkey(func = () => { }, shortcut = null, scope = null) {

  // 아예 가상의 dom 을 만들어볼까 ???

  const ghost = document.createElement('div')
  document.querySelector("#root").appendChild(ghost)
  ghost.setAttribute("data-hotkey-scope", scope)
  ghost.style.display = "none"
  const button = Object.create(buttonProto)
  button.scope = scope
  Object.defineProperty(button, 'click', { get: () => { return func } })
  install(button, shortcut);
}


// const button = {
//   getAttribute:()=>(undefined),
//   dispatchEvent:()=>(true),
//   get click() {
//     return func
//   }
// }