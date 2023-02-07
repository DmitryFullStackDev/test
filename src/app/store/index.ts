import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import saga from 'redux-saga'
import RootReducer from './RootReducer'
import RootSaga from './RootSaga'

const sagaMiddleware = saga()

const store = configureStore({
  reducer: RootReducer,
  middleware: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: true,
})

sagaMiddleware.run(RootSaga)

export default store
