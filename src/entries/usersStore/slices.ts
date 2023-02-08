import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormikCreateUserType, UserSliceType, UserType } from '../../shared'

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
    deleteUser: (state, { payload }: PayloadAction<number>) => {
      state.data = state.data.filter(item => item.id !== payload)
    },
    createUser: (state, { payload }: PayloadAction<FormikCreateUserType>) => {
      state.data.push(payload)
    },
    updateUser: (
      state,
      { payload }: PayloadAction<{ id: number; field: string; value: string }>,
    ) => {
      const { id, field, value } = payload
      const index = state.data.findIndex(item => item.id === id)
      state.data[index][field] = value
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const {
  setUsersArray,
  setIsLoading,
  deleteUser,
  updateUser,
  createUser,
} = usersArray.actions
