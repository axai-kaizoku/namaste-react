import { useState } from "react"

export const User = ({ name }) => {
  const [count] = useState(0)
  const [count2] = useState(0)
  return (
    <div className="border flex flex-col gap w-fit p-4 rounded m-4">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <p>Contact: @axai-kaizoku</p>
    </div>
  )
}
