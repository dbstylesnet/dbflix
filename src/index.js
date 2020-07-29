import React from 'react'
import ReactDOM from 'react-dom'
import './frontend/styles/index.css'
import Kodflix from './frontend/pages/kodflix'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Kodflix />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept();
}
