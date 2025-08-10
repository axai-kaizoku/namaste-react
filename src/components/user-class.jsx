import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    console.log(this.props.name + "Constructor ")
  }

  async componentDidMount() {
    console.log(this.props.name + "Component Did Mount")

    // const res = await fetch("https://api.github.com/users/axai-kaizoku")

    // const data = await res.json()

    // console.log(data)
  }

  componentDidUpadate() {
    console.log(this.props.name + "Component Did Update")
  }

  render() {
    console.log(this.props.name + "Render")
    const { name, location } = this.props
    const { count } = this.state

    return (
      <div className="border flex flex-col gap w-fit p-4 rounded m-4">
        <p>Count: {count}</p>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <p>Contact: @axai-kaizoku</p>
      </div>
    )
  }
}

export default UserClass
