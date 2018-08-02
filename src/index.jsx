import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

firebase.initializeApp({
  apiKey: 'AIzaSyC_f6GO36_IvPccEuUFS0DTCvasf4mLPBg',
  authDomain: 'curso-react-12.firebaseapp.com',
  databaseURL: 'https://curso-react-12.firebaseio.com',
  projectId: 'curso-react-12',
  storageBucket: 'curso-react-12.appspot.com',
  messagingSenderId: '750293749516'
})

render(<App />, document.getElementById('root'))
