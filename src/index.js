import { useEffect, useState } from 'react'
import { install, uninstall } from "@github/hotkey"


// export const shortcutMappingObj = {
//   showCommandPalette: "Control+P",
// };


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


function mockGetAttribute(attributeName) {
  // it look up the data-key-scope attribute
  // this ... 이걸 호출한 , dom 에서 해야하는가 그것이 가능한가 ??
  console.log(this)

  if (this.scope)

    return null
}

function mockGetAttributeTrue(scope) {

  return returnScope(scope)
}

function returnScope(scope) {

  return scope
}

function mockGetAttributeNull() {

  return null
}

function mockDispatchEvent() {

  return true
}

// data-key-scope 를 하나 더 넣어줄까 인자로 ???
export function installFuncHotkey(func = () => { }, shortcut = null, scope = "") {

  const button = {
    scope: scope,
    returnAttribute: () => {
      return this.scope
    },
    returnNull: () => {
      return null
    },
    get getAttribute() {
      if (this.scope === "") {

        // return () => null
        return returnNull
      } else {

        // return () => this.scope
        return returnAttribute
      }
    },
    get dispatchEvent() {
      return mockDispatchEvent
    },

    get click() {
      return func
    }
  }
  install(button, shortcut);
}


// const button = {
//   getAttribute:()=>(undefined),
//   dispatchEvent:()=>(true),
//   get click() {
//     return func
//   }
// }