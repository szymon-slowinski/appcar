import { NavLink, useHistory} from 'react-router-dom';
import {useCreateUser }from '../hooks/useCreateUser';
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup";
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
import { createPasswordValidation, emailValidation } from './common/validation';
import  { useState } from 'react';

const theme = createTheme();

export interface ShowingPassword{
  password: string,
  showPassword: boolean
}

export  function SignForm() {
  const [password,setPassword] = useState<ShowingPassword>({
    password: '',
    showPassword:false
  })
  const history = useHistory()
  const createUserMutation = useCreateUser()


  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword:!password.showPassword
    })
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: password.password,
      name: "",
      surname: "",
    },
    validationSchema: yup.object().shape({
      email: emailValidation,
      password: createPasswordValidation,
      name: yup.string().required("Name is required"),
      surname: yup.string().required("Surname is required"),
    }),
    onSubmit: values => {
      createUserMutation.mutate(values);
      if(createUserMutation.isSuccess){
        history.push('/dashboard')
      } 
    }
  });
 
  

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
            <FormikProvider value={formik}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
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
                autoFocus
                onChange={formik.handleChange}
                 helperText={formik.touched.surname && formik.errors.surname}
              />
              <TextField
                margin="normal"                
                required
                fullWidth
                id="email"
                type='email'
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={formik.handleChange}
                 helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth                
                name="password"
                label="Password"
                type={password.showPassword ? "text" : "password"}
                onClick={handleClickShowPassword}
                id="password"
                onChange={formik.handleChange}
                autoComplete="current-password"
                 helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Sign up
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <NavLink to="/login"> Already have an account? Sign in</NavLink>
                </Grid>
              </Grid>
            </Box>
            </FormikProvider>
          </Box>
        </Container>
      </ThemeProvider>
  )
}
