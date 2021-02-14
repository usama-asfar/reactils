export default function resize(
  file: Blob,
  { height, width }: { height: number; width: number }
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function (e) {
      const image = document.createElement('img')
      image.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        canvas.width = width
        canvas.height = height

        // eslint-disable-next-line no-unused-expressions
        ctx?.drawImage(image, 0, 0, width, height)

        resolve(canvas.toDataURL(file.type))
      }

      image.onerror = function (error) {
        reject(error)
      }

      if (typeof e.target?.result === 'string') {
        image.src = e.target.result
      }
    }

    reader.readAsDataURL(file)
  })
}
