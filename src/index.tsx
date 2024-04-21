import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from "@mui/material/styles"
import { store } from './app/store'
import App from './app/App'
import theme from './app/materialStyle';
import { CssVarsProvider } from '@mui/joy';
import React from 'react';


ReactDom.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>, document.getElementById('root')
)