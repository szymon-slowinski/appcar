
import { useHistory } from "react-router-dom";
import {ReactNode, useEffect} from "react"
import {useUser} from "../hooks/useUser";
import { CircularProgress } from "@mui/material";

export default function PrivateRoute({children,
adminRestrictions = false}:{
children:ReactNode; adminRestrictions?: boolean}){
const history = useHistory()
const {isLoading,isError,data,setIsLoggedIn} = useUser()
useEffect(()=> {
 if((!isLoading && !data) || isError){
   history.push('/login')
 }else if (!isLoading && adminRestrictions && data?.usertype !=="admin"){
   setIsLoggedIn(false)
   history.push('/login')
 }
 // eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading])

if(isLoading){
  return <CircularProgress/>
}


return (
  <>{children}</>
)
}