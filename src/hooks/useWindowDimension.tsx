import { useEffect, useState } from 'react'

export default function useWindowDimension() {
  const [dimension, useDimension] = useState<{
    height: Number
    width: Number
  }>({ height: window.innerHeight, width: window.innerWidth })

  useEffect(() => {
    const updateWindowDimension = () => {
      useDimension({ height: window.innerHeight, width: window.innerHeight })
    }

    window.addEventListener('resize', updateWindowDimension)
    return () => window.addEventListener('resize', updateWindowDimension)
  }, [])

  return [dimension.height, dimension.width]
}
