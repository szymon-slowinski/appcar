import { BookOnline, Close } from "@mui/icons-material"
import { Avatar, Box, Button, Fade,  IconButton,  Modal,Typography } from "@mui/material"
import { useState } from "react"

import { ReservationForm } from "./ReservationForm"

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
    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Button onClick={handleToggle}>Add Reservation</Button>
            <Modal
                aria-labelledby="outlined-basic"
                aria-describedby="transition-modal-description"
                open={open}
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
                        <ReservationForm/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}