import React from "react"
import UserClass, { ExtraComponent } from "./user-class"
import { User } from "./user"
import UserContext from "../utils/user-context"

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {
        login: "",
        name: "",
      },
    }
    console.log("Parent Constructor")
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("This is timer")
    // }, 1000)

    fetch("https://api.github.com/users/axai-kaizoku")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          userInfo: data,
        })
      })

    console.log("Parent Component Did Mount")
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update")
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("Parent Component Will Unmount")
  }

  render() {
    console.log("Parent Render")

    const { login, name } = this.state.userInfo

    return (
      <div>
        <h1>About us</h1>
        <h2>This is about us page</h2>
        <div className="flex flex-row gap m-4">
          <User />
          <UserContext.Consumer>{(data) => console.log(data)}</UserContext.Consumer>
          <UserClass name={"@" + login} location={name} />
          {/* <ExtraComponent /> */}
        </div>
      </div>
    )
  }
}

export default About
