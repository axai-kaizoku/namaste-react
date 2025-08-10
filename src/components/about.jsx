import React from "react"
import { User } from "./user"
import UserClass from "./user-class"

class About extends React.Component {
  constructor(props) {
    super(props)

    console.log("Parent Constructor")
  }

  componentDidMount() {
    console.log("Parent Component Did Mount")
  }

  render() {
    console.log("Parent Render")

    return (
      <div>
        <h1>About us</h1>
        <h2>This is about us page</h2>
        <div className="flex flex-row gap m-4">
          <UserClass name="First" location="" />
          <UserClass name="Second" location="" />
        </div>
      </div>
    )
  }
}

export default About
