import * as yup from "yup";
const isRequired = "is required";

export const emailValidation = yup
  .string()
  .email("Email must contains @ character")
  .required(`Email ${isRequired}`);

export const createPasswordValidation = yup
  .string()
  .min(
    8,
    "Password is too short - password should be longer than 8 characters"
  )
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*@^])/,
    "Password should contain one uppercase letter, one lowercase letter, one number and one special character"
  )
  .required(`Password  ${isRequired}`);

export const passwordValidation = yup
  .string()
  .required(`Password ${isRequired}`);

