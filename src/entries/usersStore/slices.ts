import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserSliceType, UserType } from '../../shared'

export const getUsersArray = createAction('getUsersArray')

export const usersArray = createSlice({
  name: 'usersArray',
  initialState: {
    isLoading: false,
    data: [],
  } as UserSliceType,
  reducers: {
    setUsersArray: (state, { payload }: PayloadAction<UserType[]>) => {
      state.data = payload
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const { setUsersArray, setIsLoading } = usersArray.actions
