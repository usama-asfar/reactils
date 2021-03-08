import { AnyPtrRecord } from 'node:dns'
import React, { useState, useEffect } from 'react'

import { hooks, utils } from 'reactils'

const App = () => {
  const [height, width] = hooks.useWindowDimension()
  hooks.useReloadAlert()

  return (
    <div className='App'>
      <h1>Hooks</h1>
      <div>
        <p>useWindowDimension</p>
        <p>
          height:{height}, width :{width}
        </p>
      </div>
    </div>
  )
}

export default App
