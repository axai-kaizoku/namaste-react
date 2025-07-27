import React from "react"
import ReactDOM from "react-dom/client"

// React Element

const Title = () => {
  return <h1 className="head">Namaste React from JSX 🚀</h1>
}

const number = 1000

// React Functional Component
const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h2>{console.log(number)}</h2>
      {Title()}
      <h1>Namaste React Functional Component</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading />)
