import { Box,Divider,Grid,Stack,styled, TextField, Typography, Button } from "@mui/material"
import { Avatar, Card,Badge} from "@mui/material";
import { createTheme, ThemeProvider, } from "@mui/material/styles";
import { useFormik,FormikProvider } from "formik";
import { useUser } from "../hooks/useUser";
import {validationPersonalDataSchema} from "./common/validation"
import {useUpdateUserNameAndSurname} from '../hooks/useUpdateUserNameAndSurname'
import {useUpdateEmail} from '../hooks/useUpdateEmail'
const mdTheme = createTheme();

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.9)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.5)',
        opacity: 0,
      },
    },
  }));

export const UserProfileCard = () => {
    const {data,email} = useUser()
    const updateUserNameAndSurname = useUpdateUserNameAndSurname()
    const updateEmail = useUpdateEmail()
    
    const formikUserPersonalData = useFormik({
      initialValues: {
        name: data?.name,
        surname: data?.surname
      },
      enableReinitialize: true,
      validationSchema: validationPersonalDataSchema,
      onSubmit: values => {
        if(values && values.name && values.surname){
          updateUserNameAndSurname.mutate({
            name: values.name,
            surname: values.surname
          });
        }
      }
    });

    const formikUserEmail = useFormik({
      initialValues: {
        email: email
      },
      validationSchema: validationPersonalDataSchema,
      onSubmit: ({ email }) => {
        if (email) {
          updateEmail.mutate(email);
        }
      }
    });

return (
    <ThemeProvider theme={mdTheme}>
    <Grid item xs={12} md={8} lg={9}>
          <Card 
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            
          }}> 
          <Box sx={{
            p:3,
            display: 'flex',
            flexDirection: 'row',
          }}>
            <StyledBadge
            overlap="circular"
            anchorOrigin={{vertical : 'bottom',horizontal: 'right'}}
            variant="dot"
            sx={{
              m:2
            }}
            >
            <Avatar alt="user avatar" variant="rounded"/>
            </StyledBadge>
            <Stack spacing={0.5}>
            <Typography fontWeight={700}>{data?.name} {data?.surname}</Typography>
            </Stack>
          </Box>
          <Divider/>
          <FormikProvider value={formikUserPersonalData}>
          <Box component="form" onSubmit={formikUserPersonalData.handleSubmit} sx={{mt:1}}>
          <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label={data?.name}
                name="name"
                autoComplete="name"
                onChange={formikUserPersonalData.handleChange}
                autoFocus
                helperText={formikUserPersonalData.touched.name 
                  && formikUserPersonalData.errors.name}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="surname"
                label={data?.surname}
                name="surname"
                autoComplete="surname"
                autoFocus
                onChange={formikUserPersonalData.handleChange}
                 helperText={formikUserPersonalData.touched.surname && formikUserPersonalData.errors.surname}
              />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
              Update Personal Data
            </Button>
          </Box>
          </FormikProvider>
          </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
          <Card 
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            
          }}> 
          <Box sx={{
            p:3,
            display: 'flex',
            flexDirection: 'row',
          }}>
            <Stack spacing={0.5}>
            <Typography fontWeight={700}>Change your email</Typography>
            </Stack>
          </Box>
          <Divider/>
          <FormikProvider value={formikUserEmail}>
          <Box component="form" onSubmit={formikUserEmail.handleSubmit} sx={{mt:1}}>
          <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={email}
                name="email"
                autoComplete="email"
                onChange={formikUserEmail.handleChange}
                autoFocus
                helperText={formikUserEmail.touched.email
                  && formikUserEmail.errors.email}
              />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
              Update Email
            </Button>
          </Box>
          </FormikProvider>
          </Card>
          </Grid>
          </ThemeProvider>
          )
}

