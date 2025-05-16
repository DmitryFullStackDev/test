import React from 'react'
import {
  Box,
  Button,
  SimpleInput,
  Text,
  useActions,
  useTypedSelector,
} from '../../shared'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, updateUser } from '../../entries'
import styled from 'styled-components'

const Header = styled(Box)`
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`

const FormSection = styled(Box)`
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const SpecificUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const usersArrayData = useTypedSelector(state => state.usersArray.data)
  const isLoading = useTypedSelector(state => state.usersArray.isLoading)
  const a = useActions({ deleteUser, updateUser })

  const specificUser = usersArrayData.find(item => item.id === Number(id))

  const handleDeleteClick = () => {
    a.deleteUser(Number(id))
    navigate('/')
  }

  const handleUpdateField = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    a.updateUser({
      id: Number(id),
      field,
      value: e.target.value,
    })
  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <Box
      background="inverse"
      borderRadius="12px"
      maxWidth="800px"
      direction="column"
      padding="16px"
      margin="0 auto"
      shadow="medium"
    >
      <Header justify="space-between" align="center" margin="0 0 24px 0">
        <Button onClick={() => navigate('/')} width="120px">
          Home
        </Button>
        <Text type="h24">{specificUser?.name}</Text>
        <Box width="120px" />
      </Header>

      <FormSection gap="20px" wrap="wrap">
        <Box flex={1} gap="20px" minWidth="250px" direction="column">
          <SimpleInput
            inputName="username"
            label="Username"
            placeholder="username"
            value={specificUser?.username || ''}
            onChange={e => handleUpdateField(e, 'username')}
          />
          <SimpleInput
            inputName="email"
            label="Email"
            placeholder="email"
            value={specificUser?.email || ''}
            onChange={e => handleUpdateField(e, 'email')}
          />
        </Box>

        <Box flex={1} gap="20px" minWidth="250px" direction="column">
          <SimpleInput
            inputName="name"
            label="Full Name"
            placeholder="name"
            value={specificUser?.name || ''}
            onChange={e => handleUpdateField(e, 'name')}
          />
          <SimpleInput
            inputName="phone"
            label="Phone"
            placeholder="phone"
            value={specificUser?.phone || ''}
            onChange={e => handleUpdateField(e, 'phone')}
          />
        </Box>

        <Box flex={1} gap="20px" minWidth="250px" direction="column">
          <SimpleInput
            inputName="website"
            label="Website"
            placeholder="website"
            value={specificUser?.website || ''}
            onChange={e => handleUpdateField(e, 'website')}
          />
        </Box>
      </FormSection>

      <Box justify="flex-end" margin="24px">
        <Button onClick={handleDeleteClick}>Delete</Button>
      </Box>
    </Box>
  )
}
