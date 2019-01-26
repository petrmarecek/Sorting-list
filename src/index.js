import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// app container
import App from './containers/app'

// styles
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
