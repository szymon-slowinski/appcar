import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {ReactNode} from "react"
import {useUser} from "../hooks/useUser";

export default function PrivateRoute({children}:{children:ReactNode}){
const navigate = useNavigate()
const {isLoading,isError} = useUser()
if(isLoading){
  return (
    <div>
    <CircularProgress/>
    </div>
  )
}
if(isError){
  navigate('/home')
  return (
    <div>
    <CircularProgress/>
    </div>
  )
}

return (
  <>{children}</>
)
}