import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './views/App'
import { createStoreMap } from './store/store'

// 让mobx再服务端渲染时不会重复数据变换
useStaticRendering(true)

export default (stores, routerContext, sheetsResgistry, jss, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider resgistry={sheetsResgistry} jss={jss}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
