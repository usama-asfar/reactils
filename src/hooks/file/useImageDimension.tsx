import { useState } from 'react'

export default function useImageDimension() {
  const [dimension, useDimension] = useState<{
    height: Number | null
    width: Number | null
  }>({ height: null, width: null })

  const initializeImage = (file: Blob) => {
    const reader = new window.FileReader()

    reader.readAsDataURL(file)
    reader.onload = function (e) {
      const image = new window.Image()
      if (typeof e.target?.result === 'string') {
        image.src = e.target?.result
      }

      image.onload = function () {
        useDimension(image)
      }
    }
  }

  return [initializeImage, { height: dimension.height, width: dimension.width }]
}
