
import { Box, Container,Card,CardContent,Typography} from '@mui/material'
import Navbar from '../Navbar'


 export default  function Error404() {
  return (
    <>
    <Navbar/>
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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            ERROR 404
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {"This page doesn't exist."}
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </Container>
  </Box>
  </>
  )
}

