import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "./AppBar";
import { Paper } from "@mui/material";

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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
          <Paper elevation={3}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}> 
          {'THERE WILL BE USER DETAILS'}
          </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
          <Paper elevation={3}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}> 
          {'THERE WILL BE USER DETAILS'}
          </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
          <Paper elevation={3}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}> 
          {'THERE WILL BE USER DETAILS'}
          </Paper>
          </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  )
}