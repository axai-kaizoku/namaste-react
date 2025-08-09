import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      count2: 2,
    }
  }

  render() {
    const { name, location } = this.props
    const { count, count2 } = this.state
    return (
      <div className="border flex flex-col gap w-fit p-4 rounded m-4">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <p>Contact: @axai-kaizoku</p>
      </div>
    )
  }
}

export default UserClass
