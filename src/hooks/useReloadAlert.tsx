import { useEffect } from 'react'

export default function useReloadAlert() {
  const beforeunload = (event: any) => {
    event.preventDefault()
    event.returnValue = true
  }

  return useEffect(() => {
    window.addEventListener('beforeunload', beforeunload)

    return () => {
      window.removeEventListener('beforeunload', beforeunload)
    }
  }, [beforeunload])
}
