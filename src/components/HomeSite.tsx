import { Box } from "@mui/material";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";


export default function HomeSite() {
  const history = useHistory()
  const location = useLocation()
  
  useEffect(() => { 
    const queryData = location.hash.split("&")
    if (queryData.includes("type=recovery")) {
      const token = queryData[0].split("=")[1]
      history.push({
        pathname: "/reset-password",
        search: `?authToken=${token}`
      });
    }
    /*eslint-disable */
  }, [location]);

  return (
    <div>
      <Navbar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}>
        <Signup />
      </Box>
    </div>
  )
}
