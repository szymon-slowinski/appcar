import { Box } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";


export default function HomeSite() {
  const history = useHistory()

  useEffect(() => { 
    const queryData = history.location.pathname.split("&") 
    /*eslint-disable */
    console.log(queryData)
    if (queryData.includes("type=recovery")) {
      /*eslint-disable */
      console.log("jestesmy w if type=recovery")
      history.push({
        pathname: "/reset-password",
        search: `?authToken${queryData[0].split("=")[0]}`
      });
    }
    /*eslint-disable */
  }, []);

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
