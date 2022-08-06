import { AvatarGroup, Box, Container,Divider,Typography } from "@mui/material"
import Footer from "../components/Footer"
import { Avatars } from "./common/Avatar"

export const AboutUs = () => {

    return (
        <div>
            <Box sx={{
                minHeight:"50vh"
            }}>
            <Box sx={{mt:"5vh"
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" color="text.primary" paragraph>
                        About iCARED
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Website application dedicated to managing cars.
                        Users can add their car fleet. The application
                        allows booking a car at a convenient and
                        available time. Intuitive interface shows which car
                        is free or rented. All events can be found in the
                        Calendar, where current information about booked vehicles are shown
                    </Typography>
                    <Divider/>
                </Container>
            </Box>
            <Box sx={{mt:"5vh"}}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" color="text.primary" paragraph>
                        Used technology 
                    </Typography>
                    <Box sx={{display:"flex",
                    justifyItems:"center",
                    justifyContent:"center"
                    }} >
                        <AvatarGroup max={6}>
                            <Avatars src="src/assets/img/bmw.jpg" alt="React"/>
                            <Avatars src="src/assets/img/bmw.jpg" alt="Typescript"/>
                            <Avatars src="src/assets/img/bmw.jpg" alt="Supabase"/>
                            <Avatars src="src/assets/img/bmw.jpg" alt="React Query"/>
                            <Avatars src="src/assets/img/bmw.jpg" alt="Material UI"/>
                            <Avatars src="src/assets/img/bmw.jpg" alt="Docker"/>
                        </AvatarGroup>
                        
                    </Box>
                    <Divider sx={{mt:"4px"}}/>
                </Container>
            </Box>
            <Footer/>
            </Box>
        </div>
    )
}