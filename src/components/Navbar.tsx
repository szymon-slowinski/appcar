import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iCARED
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button href='/' color="inherit">Home</Button>
          <Button href='/login' color="inherit">Login</Button>
          <Button href='/about' color="inherit">About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
