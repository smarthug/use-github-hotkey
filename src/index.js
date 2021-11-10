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
  return null
}

function mockDispatchEvent() {

  return true
}

export function installFuncHotkey(func = () => { }, shortcut = null) {

  const button = {
    get getAttribute() {
      return mockGetAttribute
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