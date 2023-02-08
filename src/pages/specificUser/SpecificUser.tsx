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

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Box width="100%" height="64px" align="center" margin="0 0 50px 0">
            <Button
              onClick={() => navigate('/')}
              margin="0 0 0 20px"
              width="150px"
            >
              Home
            </Button>

            <Text margin="0 auto">{specificUser?.name}</Text>

            <Box width="150px" />
          </Box>

          <Box shadow="low" padding="10px">
            <Box direction="column">
              <SimpleInput
                margin="0 0 5px 0"
                inputName="username"
                label="username"
                placeholder="username"
                value={specificUser?.username}
                onChange={e => handleUpdateField(e, 'username')}
              />

              <SimpleInput
                margin="0 0 5px 0"
                inputName="email"
                label="email"
                placeholder="email"
                value={specificUser?.email}
                onChange={e => handleUpdateField(e, 'email')}
              />
            </Box>

            <Box margin="0 0 0 50px" direction="column">
              <SimpleInput
                margin="0 0 5px 0"
                inputName="name"
                label="name"
                placeholder="name"
                value={specificUser?.name}
                onChange={e => handleUpdateField(e, 'name')}
              />
              <SimpleInput
                margin="0 0 5px 0"
                inputName="phone"
                label="phone"
                placeholder="phone"
                value={specificUser?.phone}
                onChange={e => handleUpdateField(e, 'phone')}
              />
            </Box>

            <Box margin="0 0 0 50px" direction="column">
              <SimpleInput
                margin="0 0 5px 0"
                inputName="website"
                label="website"
                placeholder="website"
                value={specificUser?.website}
                onChange={e => handleUpdateField(e, 'website')}
              />
            </Box>

            <Button onClick={handleDeleteClick} margin="auto 20px auto auto">
              Delete
            </Button>
          </Box>
        </>
      )}
    </>
  )
}
