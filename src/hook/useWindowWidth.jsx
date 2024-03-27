import { useState, useEffect } from 'react'

// eslint-disable-next-line no-unused-vars
export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
   const handleResize = () => setWidth(window.innerWidth)
   window.addEventListener('resize', handleResize)
  }, [])

  return width
}