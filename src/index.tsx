import { Provider } from 'react-redux'
import ReactDom from 'react-dom';

import './index.css'
import { store } from './app/store'
import App from './app/App'


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)