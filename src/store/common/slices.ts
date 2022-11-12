import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Type = {
  one?: number
  two?: number
  three?: number
}

const common = createSlice({
  name: 'common',
  initialState: {
    one: 1,
    two: 2,
    three: 3,
  } as Type,
  reducers: {
    setCommon: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      ...payload,
    }),
  },
})

export const { setCommon } = common.actions

export default combineReducers({
  common: common.reducer,
})
