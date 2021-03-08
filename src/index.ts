import { windowDimensionUtil } from './utils'
import { useWindowDimensionHook, useReloadAlertHook } from './hooks'

export const utils = {
  windowDimension: windowDimensionUtil
}

export const hooks = {
  useWindowDimension: useWindowDimensionHook,
  useReloadAlert: useReloadAlertHook
}
