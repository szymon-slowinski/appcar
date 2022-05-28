import { Box } from "@mui/material";
import Signup from "./Signup";


export default function HomeSite() {
  return (
    <div>
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
    <Signup/>
    </Box>
    </div>
  )
}
