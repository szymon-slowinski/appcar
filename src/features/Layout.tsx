import { createTheme, ThemeProvider, } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "./AppBar";
import {UserProfileCard } from "./UserProfileCard";
import { CalendarCard } from "./CalendarCard";
import { CarCard } from "./CarCard";
import { Paper } from "@mui/material";
import { CarsTable } from "./CarsTable";
import Footer from "../components/Footer";
import { CarDetails } from "./CarDetails";
import { EditCar } from "./EditCar";
import { ReservationTable } from "./ReservationTable";
import { AboutUs } from "./AboutUs";

const mdTheme = createTheme();

export const SimpleLayout=({children}:{children:React.ReactChild})=>{
  return (
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
            mr: 1,
            mt: 8, 
            mb: 2,
            pt:6,
            }}>
            <Grid container spacing={3}>
              {children}
            </Grid>
          </Container>
          <Footer/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export const  Layout = () => {
    return(
        <SimpleLayout>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <CarsTable/>
                </Paper>
              </Grid>
          </SimpleLayout>
    )
}


export const  LayoutUserProfile = () => {
  return(
    <SimpleLayout>
       <Grid  container spacing={3}>
          <UserProfileCard/>
          </Grid>
    </SimpleLayout>
  )
}

export const  ReservationLayout = () => {
  return(
     <SimpleLayout>
       <Grid item xs={12}>
                <Paper sx={{ height:"100%", p: 2, display: 'flex', flexDirection: 'column' }}>
                <ReservationTable/>
                </Paper>
              </Grid>
     </SimpleLayout>
  )
}

export const  CalendarLayout = () => {
  return(
   <SimpleLayout>
    <CalendarCard/>
   </SimpleLayout>
  )
}

export const  CarLayout = () => {
  return(
      <SimpleLayout>
        <CarCard/>
      </SimpleLayout>
  )
}

export const  SingleCarLayout = () => {
  return(
    <SimpleLayout>
      <CarDetails/>
    </SimpleLayout>
  )
}

export const  SingleCarLayoutEdit = () => {
  return(
   <SimpleLayout>
    <EditCar/>
   </SimpleLayout>
  )
}

export const AboutLayout = () => {
  return (
    <div>
      <AboutUs/>
      </div>
  )
}