import React from 'react'
import {
  Box,
  Button,
  FormikCreateUserType,
  SimpleInput,
  Text,
  useActions,
} from '../../shared'
import { useNavigate } from 'react-router-dom'
import { Form, Formik, FormikProps } from 'formik'
import { validationSchema } from './validation'
import { createUser } from '../../entries'

export const AddUser = () => {
  const navigate = useNavigate()
  const a = useActions({ createUser })

  const initialValues = {
    username: '',
    email: '',
    name: '',
    phone: '',
    website: '',
    id: Math.random(),
  }

  const onSubmit = values => {
    a.createUser(values)
    navigate('/')
  }

  return (
    <>
      <Box width="100%" height="64px" align="center" margin="0 0 50px 0">
        <Button onClick={() => navigate('/')} margin="0 0 0 20px" width="150px">
          Home
        </Button>

        <Text margin="0 auto">Create new User</Text>

        <Box width="150px" />
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
        }: FormikProps<FormikCreateUserType>) => (
          <Form>
            <Box shadow="low" padding="10px">
              <Box direction="column">
                <SimpleInput
                  margin="0 0 5px 0"
                  inputName="username"
                  label="username"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange}
                  error={errors.username}
                  touched={touched.username}
                />

                <SimpleInput
                  margin="0 0 5px 0"
                  inputName="email"
                  label="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>

              <Box margin="0 0 0 50px" direction="column">
                <SimpleInput
                  margin="0 0 5px 0"
                  inputName="name"
                  label="name"
                  placeholder="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  touched={touched.name}
                />
                <SimpleInput
                  margin="0 0 5px 0"
                  inputName="phone"
                  label="phone"
                  placeholder="phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                />
              </Box>

              <Box margin="0 0 0 50px" direction="column">
                <SimpleInput
                  margin="0 0 5px 0"
                  inputName="website"
                  label="website"
                  placeholder="website"
                  value={values.website}
                  onChange={handleChange}
                  error={errors.website}
                  touched={touched.website}
                />
              </Box>

              <Button margin="auto 20px auto auto">Create</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}
