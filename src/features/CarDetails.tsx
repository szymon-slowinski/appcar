import bmw from '../assets/img/bmw.jpg'
import {  Avatar,  Box,  Card, CardActions, CardContent, CardMedia, CircularProgress,  Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Skeleton, } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { useDeleteSingleCar, useSingleCar } from "../hooks/useSingleCar"
import { AddRoad, ArrowBack, CalendarMonth, CarCrashOutlined, DeleteForever, DirectionsCar, Numbers } from '@mui/icons-material'




export const CarDetails = () => {
    const {id} = useParams<{id:string}>()
    const {data:cars,isLoading} = useSingleCar(id)
    const deleteCar = useDeleteSingleCar()
    return (
    (!isLoading && cars ?  (
        <div>
           <Card sx={{display: 'flex', maxHeight:"80vH", maxWidth:"70vw"}}>
           <CardActions>
            <Link to="/cars">
            <IconButton>
                <ArrowBack/>
            </IconButton>
            </Link>
            </CardActions>
            <CardMedia component="img"
            sx={{width: '30vw'}}
            image={bmw}
            alt="BMW classic car"
            />
            <CardContent sx={{width: "100%",height: "100%"}}>
            <List sx={{
            width: '100%',
            bgcolor: 'background.paper',
             }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <DirectionsCar/> 
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Make" secondary={isLoading ? <Skeleton animation="wave"/> : cars?.make}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <DirectionsCar/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Model" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.model}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CalendarMonth/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Production Year" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.production_year}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Numbers/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Registration Number" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.registration_number}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AddRoad/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vehicle Mileage" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.vehicle_mileage}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CarCrashOutlined/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Damage history" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.damage_history}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <CalendarMonth/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Car Review" secondary={isLoading ? <Skeleton animation="wave"/> :cars?.car_review}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <CardActions>
                <Box sx={{
                    display:"flex",
                }}>
                <IconButton  onClick={() => deleteCar.mutate(cars.car_id)} aria-label="Delete">
                <DeleteForever/>
                </IconButton>
                </Box>
            </CardActions>
            </List>
            </CardContent>
           </Card>
        </div>
    ) : <CircularProgress/> )
        
    )
}