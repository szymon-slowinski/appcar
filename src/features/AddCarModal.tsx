import { DirectionsCar } from '@mui/icons-material';
import { Avatar, Box, Fade, Modal, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { useCreateCar } from '../hooks/useCreateCar';
import { CarAddValidation } from './common/validation';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useHistory} from 'react-router-dom';

const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: '50vw',
bgcolor: 'background.paper',
border: '2px solid #000',
borderRadius: "10px",
boxShadow: 24,
mt:1,
p: 4,
display: 'flex',
flexDirection: 'column',
alignItems: 'center'
}


export const AddCardModal = () => {
    const [open,setOpen] = useState(false)
    const [currentDate]=useState(new Date())
    const [dateReview] = useState(new Date())
    const history = useHistory()
    const handleClose = () => {
        formik.handleSubmit()
        if(formik.isValid){
          setOpen(false)
        }
    }
    const handleToggle = () =>{
        setOpen(!open)
    } 

    const handleDate = (value: Date | null) => {
        formik.setFieldValue("production_year",value)
    }

    const handleDateReview = (value: Date | null) => {
      formik.setFieldValue("car_review",value)
  }
    const createCarMutation = useCreateCar()
    const formik = useFormik({
        initialValues: {
        make:"",
        model:"",
        production_year:currentDate,
        registration_number:"",
        vehicle_mileage:0,
        damage_history:"",
        car_review: dateReview
        },
        enableReinitialize: true,
        validationSchema:CarAddValidation,
        onSubmit: values => {
          createCarMutation.mutate({
              ...values,
              production_year: values.production_year.toISOString().split("T")[0],
              car_review: values.car_review.toISOString().split("T")[0]

            })
            history.push("/dashboard")
        }
      });
    

    return (
        <div>
      <Button onClick={handleToggle}>Add Car</Button>
     <Modal
     aria-labelledby="outlined-basic"
     aria-describedby="transition-modal-description"
     open={open}
     onClose={handleClose}
     closeAfterTransition>
         <Fade in={open}>
        <Box sx={style}>
            <Avatar sx={{m:1,bgcolor: 'secondary.main'}}>
                <DirectionsCar/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Add your Car
            </Typography>
            <FormikProvider value={formik}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{mt:1}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="make"
                label="Make"
                name="make"
                autoComplete="make"
                onChange={formik.handleChange}
                autoFocus
                helperText={formik.touched.make && formik.errors.make}
              />
            <TextField
                margin="normal"
                required
                fullWidth
                id="model"
                label="Model"
                name="model"
                autoComplete="model"
                onChange={formik.handleChange}
                autoFocus
                helperText={formik.touched.model && formik.errors.model}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                value={formik.values.production_year}
                label="Production year"
                onChange={(value: Date | null) =>handleDate(value)}
                renderInput={(params) => <TextField{...params}/>}
                />
              </LocalizationProvider>
              <TextField
                margin="normal"
                required
                fullWidth
                id="registration_number"
                label="Registration Number"
                name="registration_number"
                autoComplete="Registration number"
                onChange={formik.handleChange}
                autoFocus
                helperText={formik.touched.registration_number && formik.errors.registration_number}
              />
               <TextField
                margin="normal"
                required
                type='number'
                fullWidth
                id="vehicle_mileage"
                label="Vehicle mileage"
                name="vehicle_mileage"
                autoComplete="vehicle_mileage"
                onChange={formik.handleChange}
                autoFocus
                helperText={formik.touched.vehicle_mileage && formik.errors.vehicle_mileage}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="damage_history"
                label="Damage history"
                name="damage_history"
                autoComplete="damage_history"
                onChange={formik.handleChange}
                autoFocus
                helperText={formik.touched.damage_history && formik.errors.damage_history}
              />
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                value={formik.values.car_review}
                label="Car Review"
                onChange={(value: Date | null) =>handleDateReview(value)}
                renderInput={(params) => <TextField{...params}/>}
                />
              </LocalizationProvider>
            </Box>
            <Button 
            type='submit'
            fullWidth
            variant='contained'
            onClick={handleClose}
            sx={{mt:3,mb:2}}
             >
            Add Car</Button>
            </FormikProvider>
        </Box>
         </Fade>
    </Modal>
    </div>
    )
        
    
}