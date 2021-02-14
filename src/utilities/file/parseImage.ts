export default function parseImage(
  file: Blob
): Promise<imageDimensionResolveType> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function (e) {
      const image = new Image()
      if (typeof e.target?.result === 'string') {
        image.src = e.target.result
      } else reject(new Error('error'))

      image.onload = function () {
        resolve({
          size: file.size,
          type: file.type,
          height: image.height,
          width: image.width,
          base64: image.currentSrc
        })
      }
    }
  })
}

export type imageDimensionResolveType = {
  size: Number
  type: String
  height: Number
  width: Number
  base64: String
}
