import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/Auth"
import React,{ReactNode} from "react"

export default  function PrivateRoute({children}:{children:ReactNode}) {
    const {user} = useAuth()
    /* eslint-disable-next-line*/
    console.log("user in private", user)

    if(!user){
      return <Navigate to="/home" />
    }
  return <>{children}</>
}
