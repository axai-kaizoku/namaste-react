import { User } from "./user"
import UserClass from "./user-class"

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>This is about us page</h2>
      <div className="flex flex-row gap m-4">
        <User name="Akshay (functional component)" />
        <UserClass name="Akshay (class component)" location="Bangalore (class)" />
      </div>
    </div>
  )
}

export default About
