import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// app container
import App from './containers/app'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
