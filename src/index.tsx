import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import { store } from './app/store'
import App from './app/App'


ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>

  </Provider>, document.getElementById('root')
)