import {useCallback, useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {useLogin} from '../hooks/useLogin';
import { FormikProvider, useFormik } from 'formik';
import * as yup from "yup";
import { emailValidation, passwordValidation } from './common/validation';

const theme = createTheme();

export function LoginForm() {
const loginMutation = useLogin()
const [rememberedEmail,setRememberedEmail] = useState("")
const [rememberMe, setRememberMe] = useState(false);

useEffect(() => {
    setRememberedEmail(localStorage.getItem("loginEmail")|| "")
    if(rememberedEmail){
      setRememberMe(true)
    }
  
},[rememberedEmail])

const formik = useFormik({
  initialValues: { email: rememberedEmail, password: "" },
  enableReinitialize: true,
  validationSchema: yup.object().shape({
    email: emailValidation,
    password: passwordValidation
  }),
  onSubmit: values => {
    loginMutation.mutate(values);
      if (rememberMe) {
        localStorage.setItem("loginEmail", values.email);
      } else {
        localStorage.removeItem("loginEmail");
      }
  }
});
const handleRememberMeChecked = useCallback(() => {
  setRememberMe(rememberMe => !rememberMe);
}, []);

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
              Sign in
            </Typography>
            {loginMutation.isError && <Alert severity='error'>{"Error"}</Alert> }
            <FormikProvider value={formik}>
            <Box component="form" onSubmit={formik.handleSubmit}   sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth              
                id="email"
                label="email address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={formik.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth              
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
              />
              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={handleRememberMeChecked} value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Sign in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </FormikProvider>
          </Box>
        </Container>
      </ThemeProvider>
  )
}
