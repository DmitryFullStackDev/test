import { all, fork } from 'redux-saga/effects'
import { watchCommonSaga } from './common/sagas'

export default function* RootSaga() {
  yield all([fork(watchCommonSaga)])
}
