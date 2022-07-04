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

export const validationPersonalDataSchema = yup.object().shape({
  name: yup.string().required(`Name ${isRequired}`),
  surname: yup.string().required(`Surname ${isRequired}`)
})

export const CarAddValidation = yup.object().shape({
    make: yup.string().required(`Make ${isRequired}`),
    model:yup.string().required(`Model ${isRequired}`),
    production_year:yup.string().required(`Year production ${isRequired}`),
    registration_number:yup.string().required(`Registration number ${isRequired}`),
    vehicle_mileage:yup.number().required(`Vehicle mileage ${isRequired}`),
    damage_history:yup.string().required(`Damage history ${isRequired}`),
    car_review:yup.string().required(`Year production ${isRequired}`)
}) 

export const repeatPasswordSchema = yup.object().shape({
  password: createPasswordValidation,
  passwordConf: yup.string().oneOf([yup.ref("password"),null], "Password must be the same")
});

export const ReservationAddValidation = yup.object().shape({
  subject: yup.string().required(`Subject ${isRequired}`),
  starttime:yup.string().required(`Start Time ${isRequired}`),
  endtime:yup.string().required(`End Time ${isRequired}`),
  road:yup.string().required(`Road ${isRequired}`),
  name:yup.string().required(`Name ${isRequired}`),
  surname:yup.string().required(`Surname ${isRequired}`),
  carid:yup.string().required(`You have to chose the car ${isRequired}`),
}) 