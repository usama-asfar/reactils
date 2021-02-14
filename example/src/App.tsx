import React from 'react'

import { file } from 'reactils'

const App = () => {
  return (
    <div className='App'>
      <form>
        <input
          type='file'
          onChange={async (e) => {
            if (e.target.files) {
              const dimension = await file.parseImage(e.target.files[0])
              console.log(dimension)
            }
          }}
        />
      </form>
      {/* <p>width: , height: {height}</p> */}
    </div>
  )
}

export default App
