import ReactDOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './App.jsx'

// ReactDOM.hydrate(<App />, document.getElementById('app'))

const root = document.getElementById('app')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root)
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default
    // ReactDOM.hydrate(<NextApp />, document.getElementById('app'))
    render(NextApp)
  })
}
