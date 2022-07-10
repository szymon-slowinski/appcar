import { BookOnline, Close } from "@mui/icons-material"
import { Avatar, Box, Button, Fade,  FormControl,  IconButton,  InputLabel,  MenuItem,  Modal,Select,SelectChangeEvent,TextField,Typography } from "@mui/material"
import { FormikProvider, useFormik } from "formik"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useCars } from "../hooks/useCars"
import { useCreateReservation } from "../hooks/useCreateReservation"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ReservationAddValidation } from "./common/validation"

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
    mt: 1,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}


export const AddReservationModal = () => {
    const [open, setOpen] = useState(false)
    const [startTime] = useState(new Date())
    const [endTime] = useState(new Date())
    const [carId, setCarId] = useState("")
    const { data: cars } = useCars()
    const history = useHistory()
    
    const handleClose = () => {
        formik.handleSubmit()
        if(formik.isValid){
          setOpen(false)
        }
    }
    const handleToggle = () => {
        setOpen(!open)
    }

    const handleStartTime = (value: Date | null,) => {
        formik.setFieldValue("starttime", value)
    }
    const handleEndTime = (value: Date | null,) => {
        formik.setFieldValue("endtime", value)
    }

    const handleCarIdChange = (event: SelectChangeEvent<string>) => {
        setCarId(event.target.value)
        event.preventDefault()
    }

    const createReservationMutation = useCreateReservation()
    
    const formik = useFormik({
        initialValues: {
            subject: "",
            starttime: startTime,
            endtime: endTime,
            road: "",
            name: "",
            surname: "",
            carid: carId
        },
        enableReinitialize: true,
        validationSchema: ReservationAddValidation,
        onSubmit: values => {
            createReservationMutation.mutate({
                ...values,
                starttime: values.starttime.toISOString(),
                endtime: values.endtime.toISOString(),
                carid: values.carid
            })
            history.push("/calendar")
        }
    })
    

    return (
        <div>
            <Button onClick={handleToggle}>Add Reservation</Button>
            <Modal
                aria-labelledby="outlined-basic"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition>
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
                            <IconButton onClick={handleToggle}>
                                <Close />
                            </IconButton>
                        </Box>
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <BookOnline />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Add your reservation
                        </Typography>
                        <FormikProvider value={formik}>
                            <Box component="form" onSubmit={formik.handleSubmit}
                                sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                    onChange={formik.handleChange}
                                    autoFocus
                                    helperText={formik.touched.subject && formik.errors.subject}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="road"
                                    label="Road"
                                    name="road"
                                    autoComplete="road"
                                    onChange={formik.handleChange}
                                    autoFocus
                                    helperText={formik.touched.road && formik.errors.road}
                                />
                                  <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={formik.handleChange}
                                    autoFocus
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="surname"
                                    label="Surname"
                                    name="surname"
                                    autoComplete="surname"
                                    onChange={formik.handleChange}
                                    autoFocus
                                    helperText={formik.touched.surname && formik.errors.surname}
                                />
                                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                <InputLabel id="carid">Chose your Car</InputLabel>
                                <Select fullWidth labelId="carid"
                                    id="carid-select"
                                    value={carId}
                                    onChange={handleCarIdChange}
                                    label="carid"
                                >
                                    {cars.map((car) => (
                                        <MenuItem
                                            key={car.car_id}
                                            value={car.car_id}
                                        >
                                           {car.make +" "+ car.model} 
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        value={formik.values.starttime}
                                        label="Start Time"
                                        onChange={(value: Date | null) => handleStartTime(value)}
                                        renderInput={(params) => <TextField{...params} />}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        value={formik.values.endtime}
                                        label="End Time"
                                        onChange={(value: Date | null) => handleEndTime(value)}
                                        renderInput={(params) => <TextField{...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <Button
                                onClick={handleClose}
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{mt:3,mb:2}}
                                >Add Reservation</Button>
                        </FormikProvider>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}