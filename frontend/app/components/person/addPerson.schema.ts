import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.mixed().oneOf(['child', 'adult', 'infant']),
    address: yup.string()
  })
  .required();
