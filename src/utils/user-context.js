import { useState, createContext } from "react"

const UserContext = createContext({
  loggedInUser: "Default User",
})

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState()
  return <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>{children}</UserContext.Provider>
}

export default UserContext
