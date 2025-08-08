import { useState, useEffect } from "react"

export const Contact = () => {
  const [count, setCount] = useState(1)
  let [newCount, setNewCount] = useState(3)

  useEffect(() => {
    console.clear("count changed new", count)
  }, [])

  useEffect(() => {
    console.log("count changed", count)
  }, [newCount])

  useEffect(() => {
    setCount(2)
  }, [setCount])

  useEffect(() => {
    console.log("count changed")
  }, [count, newCount])

  return (
    <div>
      <h1>Contact</h1>

      <h2>Contact us.</h2>

      <button onClick={() => setCount((prev) => prev + 1)} className="btn">
        Increase count:{count}
      </button>

      <button onClick={() => setNewCount((prev) => prev + 1)} className="btn">
        Increase new count:{newCount}
      </button>
    </div>
  )
}
