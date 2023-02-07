import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './slices'
import { API, notification } from '../../shared'

function* getAllUsers() {
  yield put(actions.setIsLoading(true))

  try {
    const { data } = yield call(() => API.getAllUsers())

    yield put(actions.setUsersArray(data))
  } catch (e) {
    notification('error', e)
  } finally {
    yield put(actions.setIsLoading(false))
  }
}

export function* watchGetUsersArraySaga() {
  yield takeLatest(actions.getUsersArray.type, getAllUsers)
}
