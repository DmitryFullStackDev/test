import { object, string } from 'yup'

export const validationSchema = object().shape({
  username: string().strict(true).required('Your website domain is required.'),
  email: string().strict(true).required('Your website domain is required.'),
  name: string().strict(true).required('Your website domain is required.'),
  phone: string().strict(true).required('Your website domain is required.'),
  website: string().strict(true).required('Your website domain is required.'),
})
