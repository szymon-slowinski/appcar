import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { FormikProvider, useFormik } from "formik"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useCars } from "../hooks/useCars"
import { useCreateReservation } from "../hooks/useCreateReservation"
import { ReservationAddValidation } from "./common/validation"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"

export const ReservationForm = () => {
    const [startTime] = useState(new Date())
    const [endTime] = useState(new Date())
    const [carId, setCarId] = useState("")
    const { data: cars } = useCars()
    const history = useHistory()
  
    const handleStartTime = (value: Date | null) => {
        formik.setFieldValue("starttime", value)
    }
    const handleEndTime = (value: Date | null) => {
        formik.setFieldValue("endtime", value)
    }

    const handleCarIdChange = (event: SelectChangeEvent) => {
        setCarId(event.target.value)
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
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={formik.values.starttime}
                                        label="Start Time"
                                        onChange={(value: Date | null) => handleStartTime(value)}
                                        renderInput={(params) => <TextField{...params} />}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={formik.values.endtime}
                                        label="End Time"
                                        onChange={(value: Date | null) => handleEndTime(value)}
                                        renderInput={(params) => <TextField{...params} />}
                                    />
                                </LocalizationProvider>
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
                                            value={carId}
                                        >
                                           {car.car_id}
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                                <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{mt:3,mb:2}}
                                >Add Reservation</Button>
                            </Box>
                        </FormikProvider>
    )
}