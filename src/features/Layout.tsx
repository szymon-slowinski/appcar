import { createTheme, ThemeProvider, } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "./AppBar";
import {UserProfileCard } from "./UserProfileCard";
const mdTheme = createTheme();

export const  Layout = () => {
    return(
        <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar/>
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
          }}
        >
          <Container maxWidth="lg" sx={{ 
            mt: 4, 
            mb: 4,
            }}>
            <Grid container spacing={3}>
              
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    )
}



export const  LayoutUserProfile = () => {
  return(
      <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar/>
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
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
          <Grid  container spacing={3}>
          <UserProfileCard/>
          </Grid>
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  )
}