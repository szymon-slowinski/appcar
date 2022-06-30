import { useSingleCar } from "../hooks/useSingleCar"
import bmw from '../assets/img/bmw.jpg'
import {    Box,  Button,  Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, TextField, } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { ArrowBack,} from '@mui/icons-material'
import { useUpdateCarDetails } from "../hooks/useUpdateCarDetails"
import { FormikProvider, useFormik } from "formik"
import { CarAddValidation } from "./common/validation"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react"

export const EditCar = () => {
    const {id} = useParams<{id:string}>()
    const {data:cars,isLoading} = useSingleCar(id)
    const updateCarDetails = useUpdateCarDetails()
    const [dateReview] = useState(new Date())
    const [dateProduction] = useState(new Date())
   
    const handleDate = (value: Date | null) => {
        formikCarData.setFieldValue("production_year",value)
    }
    const handleDateReview = (value: Date | null) => {
        formikCarData.setFieldValue("car_review",value)
    }

    const formikCarData = useFormik({
        initialValues: {
            make:cars?.make,
            model:cars?.model,
            production_year: dateProduction,
            registration_number:cars?.registration_number,
            vehicle_mileage:cars?.vehicle_mileage,
            damage_history:cars?.damage_history,
            car_review: dateReview
            },
        enableReinitialize: true,
        validationSchema: CarAddValidation,
        onSubmit: values => {
          if(values && values.make && values.model && values.production_year
            && values.registration_number && values.vehicle_mileage && values.damage_history
            && values.car_review){
            updateCarDetails.mutate({
              make: values.make,
              model: values.model,
              registration_number: values.registration_number,
              vehicle_mileage: values.vehicle_mileage,
              damage_history: values.damage_history,
              car_review: values.car_review.toISOString().split("T")[0],
              production_year: values.production_year.toISOString().split("T")[0],
            });
          }
        }
      });


    return (
        (!isLoading ?  (
            <div>
               <Card sx={{display: 'flex', maxWidth:"70vw"}}>
               <CardActions>
                <Link to="/cars">
                <IconButton>
                    <ArrowBack/>
                </IconButton>
                </Link>
                </CardActions>
                <CardMedia component="img"
                sx={{width: '30vw', maxHeight:"80vH"}}
                image={bmw}
                alt="BMW classic car"
                />
                <CardContent sx={{width: "100%",height: "100%"}}>
                <FormikProvider value={formikCarData}>
                    <Box component="form" onSubmit={formikCarData.handleSubmit}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="make"
                        label={cars?.make}
                        name="make"
                        autoComplete="make"
                        onChange={formikCarData.handleChange}
                        autoFocus
                        helperText={formikCarData.touched.make 
                          && formikCarData.errors.make}
                        />
                         <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="model"
                        label={cars?.model}
                        name="model"
                        autoComplete="model"
                        onChange={formikCarData.handleChange}
                        autoFocus
                        helperText={formikCarData.touched.model && formikCarData.errors.model}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            value={formikCarData.values.production_year}
                            label={`Production year ${cars?.production_year}`}
                            onChange={(value: Date | null) =>handleDate(value)}
                            renderInput={(params) => <TextField{...params}/>}
                            />
                        </LocalizationProvider>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="registration_number"
                            label={cars?.registration_number}
                            name="registration_number"
                            autoComplete="Registration number"
                            onChange={formikCarData.handleChange}
                            autoFocus
                            helperText={formikCarData.touched.registration_number 
                                && formikCarData.errors.registration_number}
                        />
                        <TextField
                            margin="normal"
                            required
                            type='number'
                            fullWidth
                            id="vehicle_mileage"
                            label={cars?.vehicle_mileage}
                            name="vehicle_mileage"
                            autoComplete="vehicle_mileage"
                            onChange={formikCarData.handleChange}
                            autoFocus
                            helperText={formikCarData.touched.vehicle_mileage 
                                && formikCarData.errors.vehicle_mileage}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="damage_history"
                            label={cars?.damage_history}
                            name="damage_history"
                            autoComplete="damage_history"
                            onChange={formikCarData.handleChange}
                            autoFocus
                            helperText={formikCarData.touched.damage_history 
                             && formikCarData.errors.damage_history}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker 
                            value={formikCarData.values.car_review}
                            label={`Car Review  ${cars?.car_review} `}
                            onChange={(value: Date | null) =>handleDateReview(value)}
                            renderInput={(params) => <TextField{...params}/>}
                            />
                        </LocalizationProvider>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Update Car Data
                        </Button>
                    </Box>
                </FormikProvider>
                </CardContent>
               </Card>
            </div>
        ) : <CircularProgress/> )
            
        )
    
}