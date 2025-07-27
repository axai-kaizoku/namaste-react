import React from "react"
import ReactDOM from "react-dom/client"

// JSX (transplied before it reaches the JS Engine) - Parcel - Babel

// JSX => Babel converts into React.createElement => ReactElement (JS Object) => HTML Element (render)

const jsxHeading = <h1 className="head">Namaste React from JSX 🚀</h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)
