import { useEffect, useState } from 'react'
import { install, uninstall } from "@github/hotkey"

// export const shortcutMappingObj = {
//   showCommandPalette: "Control+P",
// };

const buttonProto = {
  scope: null,
  returnNull: () => null,
  returnScope: () => this.scope,
  returnTrue: () => true,
  get getAttribute() {
    console.log(this.scope)
    if (this.scope === null) {

      return this.returnNull
    } else {
      return this.returnScope
    }
  },
  get dispatchEvent() {
    return this.returnTrue
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
// 확장 , 다른걸로 ... 
// export function installFuncHotkey(func = () => { }, shortcut = null, scope = null) {

//   // 아예 가상의 dom 을 만들어볼까 ???

//   const ghost = document.createElement('div')
//   document.querySelector("#root").appendChild(ghost)
//   ghost.setAttribute("data-hotkey-scope", scope)
//   ghost.style.display = "none"
//   const button = Object.create(buttonProto)
//   button.scope = scope
//   Object.defineProperty(button, 'click', { get: () => { return func } })
//   install(button, shortcut);
// }


// const button = {
//   getAttribute:()=>(undefined),
//   dispatchEvent:()=>(true),
//   get click() {
//     return func
//   }
// }



export function installFuncHotkey(func = () => { }, shortcut = null, scope = null) {


  const button = Object.create(buttonProto)
  button.scope = scope
  Object.defineProperty(button, 'click', { get: () => { return func } })
  install(button, shortcut);
}