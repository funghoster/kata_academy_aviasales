import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/app/App.jsx'
import stores from './stores/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={stores}>
    <App />
  </Provider>
)
