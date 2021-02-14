import React, { useState, useEffect } from 'react'

import { image, hooks, utils } from 'reactils'

const App = () => {
  const [height, width] = hooks.useWindowDimension()

  const [file, setFile] = useState(
    'data:image/jpeg;base64,iVBOkiYwmOIYJXxH4r7WLwgFoGBAAAAAElFTkSuQmCC'
  )

  return (
    <div className='App'>
      <form>
        <input
          type='file'
          onChange={async (e) => {
            if (e.target.files) {
              console.log('resized')
              const resized = await image.resize(e.target.files[0], {
                width: 500,
                height: 600
              })

              const cc = await image.compress(resized, 100)

              setFile(cc)
              // handleLoadAvatar(e)
            }
          }}
        />
      </form>
      <p>
        width: {width}, height: {height}
      </p>

      <img src={file} />
    </div>
  )
}

export default App
