import { useState, useEffect } from "react"

export const useOnlineStatus = () => {
  const [onlineState, setOnlineState] = useState(true)

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineState(false)
    })

    window.addEventListener("online", () => {
      setOnlineState(true)
    })
  }, [])

  return onlineState
}
