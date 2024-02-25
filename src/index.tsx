import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from "@mui/material/styles"
import { store } from './app/store'
import App from './app/App'
import theme from './app/materialStyle';
import { CssVarsProvider } from '@mui/joy';


ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>, document.getElementById('root')
)