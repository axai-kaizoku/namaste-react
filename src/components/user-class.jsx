import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      data: {},
    }

    console.log(this.props.name + "Constructor ")
  }

  async componentDidMount() {
    console.log(this.props.name + "Component Did Mount")
  }

  componentDidUpdate() {
    console.log(this.props.name + "Component Did Update")
  }

  componentWillUnmount() {
    console.log("User Component Will Unmount")
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
        <ExtraComponent />
        <p>Contact: @axai-kaizoku</p>
      </div>
    )
  }
}

export default UserClass

class ExtraComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log("Extra Constructor")
  }

  componentDidMount() {
    console.log("Extra Component Did Mount")
  }

  componentWillUnmount() {
    console.log("Extra Component Will Unmount")
  }

  render() {
    console.log("Extra Render")
    return <h1>Extra Component</h1>
  }
}

export { ExtraComponent }
