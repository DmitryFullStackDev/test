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
import styled from 'styled-components'

const FormContainer = styled(Box)`
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const InputGroup = styled(Box)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

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

  const onSubmit = (values: FormikCreateUserType) => {
    a.createUser(values)
    navigate('/')
  }

  return (
    <>
      <Box
        width="100%"
        height="64px"
        align="center"
        justify="space-between"
        padding="0 20px"
        margin="0 0 30px 0"
      >
        <Button onClick={() => navigate('/')} width="100px">
          Home
        </Button>
        <Text type="h24" textAlign="center">
          Create New User
        </Text>
        <Box width="100px" /> {/* Spacer to balance layout */}
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
            <FormContainer
              padding="24px"
              gap="20px"
              maxWidth="800px"
              direction="column"
              borderRadius="12px"
              shadow="medium"
              background="inverse"
              margin="0 auto"
            >
              <InputGroup wrap="wrap" gap="20px">
                <SimpleInput
                  inputName="username"
                  label="Username"
                  placeholder="Enter username"
                  value={values.username}
                  onChange={handleChange}
                  error={errors.username}
                  touched={touched.username}
                />
                <SimpleInput
                  inputName="email"
                  label="Email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                />
              </InputGroup>

              <InputGroup wrap="wrap" gap="20px">
                <SimpleInput
                  inputName="name"
                  label="Full Name"
                  placeholder="Enter full name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  touched={touched.name}
                />
                <SimpleInput
                  inputName="phone"
                  label="Phone"
                  placeholder="Enter phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                />
              </InputGroup>

              <SimpleInput
                inputName="website"
                label="Website"
                placeholder="Enter website"
                value={values.website}
                onChange={handleChange}
                error={errors.website}
                touched={touched.website}
              />

              <Box justify="flex-end">
                <Button>Create</Button>
              </Box>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </>
  )
}
