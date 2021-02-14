import { windowDimensionUtils } from './utils'
import { getBase64TypeFile } from './file'
import { parseImage, resizeImage, compressImage } from './image'
import { useWindowDimensionHooks } from './hooks'

export const utils = {
  windowDimension: windowDimensionUtils
}

export const file = {
  getBase64Type: getBase64TypeFile
}

export const image = {
  parse: parseImage,
  resize: resizeImage,
  compress: compressImage
}

export const hooks = {
  useWindowDimension: useWindowDimensionHooks
}
