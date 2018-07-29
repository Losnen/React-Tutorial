import React, { Component } from 'react'
import 'normalize-css'

import Header from '../Header'
import Main from '../Main'

import './app.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        email: 'samuelrb1@gmail.com',
        displayName: 'Samuel Ramos'
      }
    }
  }

  render () {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
