import React from 'react'
import { Router } from './router'
import store from './store'
import { Provider } from 'react-redux'
import Theme from './theme'

const App = () => (
  <Provider store={store}>
    <Theme>
      <Router />
    </Theme>
  </Provider>
)

export default App
