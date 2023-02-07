import { all, fork } from 'redux-saga/effects'
import { watchGetUsersArraySaga } from '../../entries'

export default function* RootSaga() {
  yield all([fork(watchGetUsersArraySaga)])
}
