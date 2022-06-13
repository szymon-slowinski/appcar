import { useEffect } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import {Layout} from "../features/Layout";
import PrivateRoute from "./PrivateRoute";

export default function Dashboard() {
const location = useLocation()
const queryData = location.pathname.split("&")
const navigate = useNavigate() 

  useEffect(()=>{
    if(queryData.includes("type=recovery")){
      navigate({
        pathname:'/reset-password',
        search: `?authToken=${queryData[0].split("=")[0]}`,
      })
    }
  },[queryData])
    
  return (
  <PrivateRoute>
  <Layout/>        
  </PrivateRoute>
  );
}
