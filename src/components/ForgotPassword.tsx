import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbar from "./Navbar";
import { FormikProvider, useFormik } from "formik";
import { useResetPassword } from "../hooks/useResetPassword";
import * as yup from "yup";
import { emailValidation } from "../features/common/validation";
import { useNavigate } from "react-router-dom";

const theme = createTheme()

export default function ForgotPassword (){
    const navigate = useNavigate()
    const resetPassword = useResetPassword()
    const formik = useFormik({
        initialValues: { email: "" },
        enableReinitialize: true,
        validationSchema: yup.object().shape({
          email: emailValidation
        }),
        onSubmit: ({ email }) => {
          if (typeof email === "string") {
            resetPassword.mutate(email);
            navigate('/login')
          }
        }
      });

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Container  component="main" maxWidth="xs">
            <CssBaseline/>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Send Email to change password
              </Button>
            </Box>
            </FormikProvider>
          </Box>
            </Container>
        </ThemeProvider>
    )
}