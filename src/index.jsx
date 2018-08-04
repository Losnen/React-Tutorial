import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

firebase.initializeApp({
})

render(<App />, document.getElementById('root'))
