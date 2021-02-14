import { base64TypeFile } from '../file'

export default function compress(
  base64: string,
  quality: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const image = document.createElement('img')
    const type = base64TypeFile(base64)

    image.onload = function () {
      const width = image.width
      const height = image.height

      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      // eslint-disable-next-line no-unused-expressions
      ctx?.drawImage(image, 0, 0, width, height)

      resolve(canvas.toDataURL(type, quality / 100))
    }

    image.onerror = function (error) {
      reject(error)
    }

    image.src = base64
  })
}
