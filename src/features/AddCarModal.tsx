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
import { FormInput } from './common/FormInput';

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
            <FormInput name="make" type='text'/>
            <FormInput name='model' type='text'/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                value={formik.values.production_year}
                label="Production year"
                onChange={(value: Date | null) =>handleDate(value)}
                renderInput={(params) => <TextField{...params}/>}
            />
              </LocalizationProvider>
              <FormInput name='registration_number' type='text'/>
              <FormInput name='vehicle_mileage' type='text'/>
              <FormInput name='damage_history' type='text'/>
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