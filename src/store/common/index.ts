import commonReducer from './slices'
import { ISagaModule } from 'redux-dynamic-modules-saga'
import { watchCommonSaga } from './sagas'

export function getUsersModule(): ISagaModule<any> {
  return {
    id: 'users',
    reducerMap: {
      users: commonReducer,
    },
    sagas: [watchCommonSaga],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  }
}
