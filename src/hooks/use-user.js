import { useContext, useState, useEffect } from "react"
import UserContext from "../utils/user-context"

export function useUser() {
  const data = useContext(UserContext)

  return { loggedInUser: data.loggedInUser, setUserName: data.setUserName }
}
