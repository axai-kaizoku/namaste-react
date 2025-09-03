import { useNavigate } from "react-router"
import { useUser } from "../../hooks/use-user"

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center mt-20">
      <h1 className="text-2xl font-bold my-2">Login</h1>
      <LoginForm />
    </div>
  )
}

function LoginForm() {
  const { setUserName } = useUser()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target[0].value
    const pass = e.target[1].value
    console.log(name, pass)
    setUserName(name)
    navigate("/")
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5 my-4">
      <div className="flex items-center gap-2">
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" required name="username" />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="current-password">Password: </label>
        <input
          type="text"
          style={{ WebkitTextSecurity: "disc" }}
          id="current-password"
          required
          name="current-password"
        />
      </div>

      <p className="text-xs">hint: username=anything, password=anything</p>
      <button type="submit" className="w-full">
        Submit
      </button>
    </form>
  )
}
