import React, { useEffect, useState } from 'react'
import { install, uninstall } from "@github/hotkey"
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


// weak map 스러운걸 사용 ... 
const shortcutFCMap = {};
const button = document.createElement('button');
button.addEventListener("click", func); // event 는 하나여야 하니까 ... map 형태로 가자 ... 
install(button, shortcut)
// global 한 weak map 을 사용하는 ????
export function useFuncHotkey(func = ()=>{}, shortcut=null){

  // 이말인 즉슨 install 도 한번이여야한다는것 ... 
}


// export function fireDeterminedAction(el: HTMLElement): void {
//     if (isFormField(el)) {
//         el.focus()
//     } else {
//         el.click()
//     }
// }



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