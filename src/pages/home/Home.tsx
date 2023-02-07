import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  routes,
  SimpleInput,
  Text,
  useActions,
  useTypedSelector,
} from '../../shared'
import { getUsersArray, setUsersArray } from '../../entries/'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [value, setValue] = useState('')

  const usersArrayData = useTypedSelector(state => state.usersArray.data)
  const isLoading = useTypedSelector(state => state.usersArray.isLoading)

  const a = useActions({ getUsersArray, setUsersArray })
  const navigate = useNavigate()

  const filtratedArr = usersArrayData.filter(item =>
    item.username.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  )

  const path = item =>
    routes.specificUser.split('/').slice(0, -1).join('/') + '/' + item.id

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  useEffect(() => {
    if (usersArrayData.length === 0) {
      a.getUsersArray()
    }
  }, [])

  return (
    <>
      <Box width="100%" direction="row" align="center" margin="0 0 50px 0">
        <SimpleInput
          inputName="search"
          label="search"
          placeholder="type user name"
          value={value}
          onChange={handleInputChange}
        />

        <Button margin="0 0 0 20px" width="150px">
          Add new user
        </Button>
      </Box>

      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <Box direction="column">
          {filtratedArr.map(item => (
            <Box
              onClick={() => navigate(path(item))}
              cursor="pointer"
              backgroundHover="ui100"
              shadow="low"
              padding="10px"
              key={item.id}
            >
              <Box direction="column">
                <Box>
                  <Text margin="0 5px 0 0">username:</Text>
                  <Text>{item.username}</Text>
                </Box>
                <Box>
                  <Text margin="0 5px 0 0">id:</Text>
                  <Text>{item.id}</Text>
                </Box>
                <Box>
                  <Text margin="0 5px 0 0">email:</Text>
                  <Text>{item.email}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
