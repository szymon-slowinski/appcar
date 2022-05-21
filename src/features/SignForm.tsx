import { useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { supabase } from '../db/Supabase';
const theme = createTheme();

export  function SignForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useAuth();
    const navigate = useNavigate()
    
    const signUp =async (value:{email:string,password:string}) => {
      const {user,error}=await supabase.auth.signUp({
        email:value.email,
        password:value.password
      })
      if(user){
        setUser(user)
        navigate('/')
      }else if(error){
        throw new Error(error.message)
      }
    }

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        /* eslint-disable-next-line*/
        console.log("email",email,"password",password)
        await signUp({email,password})
    } 

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                value={password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={()=>handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <NavLink to="/login"> Already have an account? Sign in</NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  )
}
