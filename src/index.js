import React, { useEffect, useState } from 'react'
import { install, uninstall, eventToHotkeyString } from "@github/hotkey"
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

// 여기서 shortcut 을 인자로 받게 하자 ... 아니면 object 쓰던가 ... 
// 두번째 인자나 첫번째 인자로 무엇을 위한 단축키 인지 받게 할까 ?? 
export function useHotkey(shortcut = null) {
  const [element, setElement] = useState(null);


  useEffect(() => {
    if (shortcut) {
      element && install(element, shortcut)
    } else {
      element && install(element, shortcutMappingObj.showCommandPalette)
      // element && install(element, shortcutMappingObj[shortcut])
    }

    return () => {
      uninstall(element)
      // element && uninstall(element)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])
  return setElement
}


export const shortcutMappingObj = {
  showCommandPalette: "Control+P",
};


///////////////////////////////////////

let tmp = "t t";

const funcShortcutObj = {};
const button = document.createElement('button');
button.addEventListener("click", (e)=>{funcHotkeyHandler(e,tmp)});

function funcHotkeyHandler(e,tmp) {
  console.log(e)
  console.log(tmp)
  console.log(funcShortcutObj)
  funcShortcutObj[tmp]();
}

export function installFuncHotkey(func = () => { }, shortcut = null) {

  funcShortcutObj[shortcut] = func;
  install(button, shortcut);
}



















































// export function isFormField(element: Node): boolean {
//     if (!(element instanceof HTMLElement)) {
//         return false
//     }

//     const name = element.nodeName.toLowerCase()
//     const type = (element.getAttribute('type') || '').toLowerCase()
//     return (
//         name === 'select' ||
//         name === 'textarea' ||
//         (name === 'input' && type !== 'submit' && type !== 'reset' && type !== 'checkbox' && type !== 'radio') ||
//         element.isContentEditable
//     )
// }


export function isFormField(element) {
  if (!(element instanceof HTMLElement)) {
    return false
  }

  const name = element.nodeName.toLowerCase()
  const type = (element.getAttribute('type') || '').toLowerCase()
  return (
    name === 'select' ||
    name === 'textarea' ||
    (name === 'input' && type !== 'submit' && type !== 'reset' && type !== 'checkbox' && type !== 'radio') ||
    element.isContentEditable
  )
}



// document.addEventListener("keydown", (event) => {
//   // console.log("hotkey handle!!!")
//   // console.log(e)
//   // let tmp = eventToHotkeyString(e);
//   // console.log(tmp)
//   // if(event)

//   if (event.defaultPrevented) return
//   if (event.target instanceof Node && isFormField(event.target)) return

//   console.log(event);

//   // If the user presses a hotkey that doesn't exist in the Trie,
//   // they've pressed a wrong key-combo and we should reset the flow
//   // const newTriePosition = (currentTriePosition as RadixTrie<HTMLElement>).get(eventToHotkeyString(event))
//   // if (!newTriePosition) {
//   //   resetTriePosition()
//   //   return
//   // }
//   let tmp = eventToHotkeyString(event)
//   let is = funcShortcutWm.hasOwnProperty(tmp)

//   console.log(tmp);
//   if (is) {
//     // console.log(tmp)
//     funcShortcutWm[tmp]();
//     // fireDeterminedAction(newTriePosition.children[newTriePosition.children.length - 1])

//     // event.preventDefault()

//     return
//   }
// })
