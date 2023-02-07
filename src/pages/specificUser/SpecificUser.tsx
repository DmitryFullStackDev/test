import React, { useEffect } from 'react'
import { Box, Button, Text, useActions, useTypedSelector } from '../../shared'
import { useNavigate, useParams } from 'react-router-dom'
import { getUsersArray, setUsersArray } from '../../entries'

export const SpecificUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const usersArrayData = useTypedSelector(state => state.usersArray.data)
  const isLoading = useTypedSelector(state => state.usersArray.isLoading)

  const a = useActions({ getUsersArray, setUsersArray })

  const specificUser = usersArrayData.find(item => item.id === Number(id))

  useEffect(() => {
    if (usersArrayData.length === 0) {
      a.getUsersArray()
    }
  }, [])

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
              <Box>
                <Text margin="0 5px 0 0">username:</Text>
                <Text>{specificUser?.username}</Text>
              </Box>
              <Box>
                <Text margin="0 5px 0 0">id:</Text>
                <Text>{specificUser?.id}</Text>
              </Box>
              <Box>
                <Text margin="0 5px 0 0">email:</Text>
                <Text>{specificUser?.email}</Text>
              </Box>
            </Box>

            <Box margin="0 0 0 50px" direction="column">
              <Box>
                <Text margin="0 5px 0 0">name:</Text>
                <Text>{specificUser?.name}</Text>
              </Box>
              <Box>
                <Text margin="0 5px 0 0">phone:</Text>
                <Text>{specificUser?.phone}</Text>
              </Box>
              <Box>
                <Text margin="0 5px 0 0">website:</Text>
                <Text>{specificUser?.website}</Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}
