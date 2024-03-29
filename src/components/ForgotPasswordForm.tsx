import { Avatar, Box, Button, Container, CssBaseline,Typography } from "@mui/material";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbar from "./Navbar";
import { FormikProvider, useFormik } from "formik";
import {  useEffect, useState } from "react";
import { useResetPasswordConfirmation } from "../hooks/useResetPasswordConfirmation";
import { repeatPasswordSchema } from "../features/common/validation";
import { useHistory ,useLocation } from "react-router-dom";
import { FormInput } from "../features/common/FormInput";

const theme = createTheme()

export default function ForgotPasswordForm () { 
  const location = useLocation()
    const history = useHistory()
    const [authToken,setAuthToken]=useState("")
    const resetPasswordMutation = useResetPasswordConfirmation();
    const formik = useFormik({
        initialValues: { password: "",passwordConfirmation:"" },
        enableReinitialize: true,
        validationSchema: repeatPasswordSchema,
        onSubmit: ({ password }) => {
         resetPasswordMutation.mutate({
            authToken,
            password
         })
        }
      });

      useEffect(() => {
        const token = location.search
        const urlToken = token.split("=")[1]
        if(urlToken && typeof urlToken === "string"){
          setAuthToken(urlToken)
        }else{
          history.push("/")
        }
        /*eslint-disable */
      },[])


    return(
        <ThemeProvider theme={theme}>
        <Navbar/>
        <Container sx={{
              height:"74vh"
            }}  component="main" maxWidth="xs">
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
          Change your password
        </Typography>
        <FormikProvider value={formik}>
        <Box component="form" onSubmit={formik.handleSubmit}   sx={{ mt: 1 }}>
        <FormInput name="password" type="password"/>
        <FormInput name="passwordConfirmation" type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
          Change Password
          </Button>
        </Box>
        </FormikProvider>
      </Box>
        </Container>
    </ThemeProvider>
    )
}