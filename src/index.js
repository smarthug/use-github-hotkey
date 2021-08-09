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


export function installFuncHotkey(func = () => { }, shortcut = null) {

  const button = {
    get click() {
      return func
    }
  }
  install(button, shortcut);
}