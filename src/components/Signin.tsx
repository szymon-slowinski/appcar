import { Box } from "@mui/material";
import { LoginForm } from "../features/LoginForm";


export default  function Signin() {
  return (
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
  <LoginForm/>
  </Box>
  )
}
