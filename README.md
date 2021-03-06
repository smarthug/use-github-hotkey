# use-github-hotkey

> react hooks of [@github/hotkey](https://github.com/github/hotkey)

[![NPM](https://img.shields.io/npm/v/use-github-hotkey.svg)](https://www.npmjs.com/package/use-github-hotkey) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Feature
- A react hooks wrapper of [@github/hotkey](https://github.com/github/hotkey)
- The easiest API possible
- Coded perfectly for react component lifecycle
- Supports triggering Function with hotkey. HTML  DOM is not necessary.

## Demo
https://smarthug.github.io/useHotkey/

## Install

```bash
npm install use-github-hotkey
```

## Usage

```jsx
import React from 'react'
import { useHotkey, installFuncHotkey } from 'use-github-hotkey'

export default function App() {
  // keyboard shortcut with dom
  const setTestShortcut = useHotkey("t e")

  // keyboard shortcut with function
  installFuncHotkey(handleFunction, "t t")

  function handleClick() {
    alert("t e clicked");
  }

  function handleFunction() {
    alert("t t clicked");
  }

  return (
    <div>
      <h1>example</h1>
      <button ref={setTestShortcut} onClick={handleClick} >press "t e" to click this button with hotkey</button>
      <h3>press "t t" to invoke function with hotkey</h3>
    </div>
  )
}

```



## License

MIT © [smarthug](https://github.com/smarthug)
