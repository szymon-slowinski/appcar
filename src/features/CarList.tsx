import { Avatar, Box,Button,Card, CardActions, CardContent, CardHeader, CardMedia, Container, createTheme, Grid, IconButton, Stack, ThemeProvider, Typography } from "@mui/material"
import { useCars } from "../hooks/useCars"
import { AddCardModal } from "./AddCarModal"
import bmw from "../assets/img/bmw.jpg"
import { blue } from "@mui/material/colors"
import { DeleteForever, Edit, ReadMore } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const theme = createTheme()

export const CarList = () => {
    const {data: cars} = useCars()
    
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{
            pt: 6,
            pb: 6,
          }}>
            <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              There are all your cars. You can manage all of them.
            </Typography>
            <Stack sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center">
                <AddCardModal/>
            </Stack>
            </Container>
            </Box>
            <Container sx={{ py:0.5}} maxWidth="lg">
            <Grid container spacing={4}>
            {cars?.map((car) => (
                <Grid item key={car.car_id} xs={12} sm={6} md={4}>
                    <Card 
                    sx={{ height:'100%',
                    maxWidth:400,
                     display:'flex',
                     flexDirection: 'column' }}
                     >
                        <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: blue[300]}}
                            aria-label="Car"
                            >
                            C
                            </Avatar>
                        }
                        title={car.make}
                        subheader={car.model}
                        />
                       <CardMedia
                       component="img"
                       height="250"
                       alt="Black BMW car image"
                       src={bmw}
                       /> 
                       <CardContent sx={{flexGrow: 1}}>
                        <Typography variant="body2" color="text.secondary">
                            Numer rejestracyjny: {car.registration_number}<br></br>
                            Data produkcji: {car.production_year}<br></br>
                            Przebieg samochodu: {car.vehicle_mileage}<br></br>
                            Historia uszkodzeń: {car.damage_history}<br></br>
                            Data przeglądu technicznego: {car.car_review}<br></br>
                        </Typography>
                       </CardContent>
                       <CardActions disableSpacing>
                       <Link to={`/cars/${car.car_id}`}>
                        <IconButton aria-label="More details">
                         <ReadMore/>
                         </IconButton>
                         </Link>
                        <IconButton aria-label="Edit">
                        <Edit/>
                        </IconButton>
                        <IconButton aria-label="Delete">
                        <DeleteForever/>
                        </IconButton>
                       </CardActions>
                       <Button size="small">Reserve Car</Button>
                     </Card>
                </Grid>
            ))}
            </Grid>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}