import React, { useState } from 'react'
import {
  Box,
  Button,
  routes,
  SimpleInput,
  Text,
  useTypedSelector,
} from '../../shared'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [value, setValue] = useState('')

  const usersArrayData = useTypedSelector(state => state.usersArray.data)
  const isLoading = useTypedSelector(state => state.usersArray.isLoading)

  const navigate = useNavigate()

  const filtratedArr = usersArrayData.filter(item =>
    item.username.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  )

  const path = item =>
    routes.specificUser.split('/').slice(0, -1).join('/') + '/' + item.id

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return (
    <Box direction="column" width="100%" padding="40px" gap="30px">
      <Box
        width="100%"
        direction="row"
        align="center"
        justify="space-between"
        gap="10px"
      >
        <SimpleInput
          inputName="search"
          label="Search Users"
          placeholder="Type username..."
          value={value}
          onChange={handleInputChange}
        />

        <Button
          type="primary"
          onClick={() => navigate(routes.addUser)}
          width="45px"
        >
          +
        </Button>
      </Box>

      {isLoading ? (
        <Text type="h18">Loading...</Text>
      ) : (
        <Box direction="column" gap="20px" padding="10px 0">
          {filtratedArr.map(item => (
            <Box
              key={item.id}
              onClick={() => navigate(path(item))}
              direction="column"
              padding="20px"
              background="ui100"
              borderRadius="12px"
              shadow="low"
              cursor="pointer"
              transition="all 0.2s ease"
              backgroundHover="ui200"
            >
              <Text type="h18" margin="0 0 5px 0">
                {item.username}
              </Text>
              <Text color="secondary">ID: {item.id}</Text>
              <Text color="secondary">Email: {item.email}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
