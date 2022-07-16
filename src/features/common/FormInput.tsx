import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

export const FormInput = ({name}:{name:string}) => {
    const [field,meta]=useField(name)
  return (
     <TextField
                                    margin="normal"
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
