import { TextField } from '@mui/material'
import { useField } from 'formik'


export const FormInput = ({name,type}:{name:string,type:string}) => {
    const [field,meta]=useField(name)
  return (
     <TextField
      margin="normal"
      type={type}
      required
      fullWidth
      id={name}
      label={name.slice(0,1).toUpperCase()+name.slice(1)}
      name={field.name}
      autoComplete={name}
      onChange={field.onChange}
      autoFocus
      helperText={meta.touched && meta.error}
      />
  )
}
