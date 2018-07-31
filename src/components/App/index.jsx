import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={() => {
            if (this.state.user) {
              return (
                <Main user={this.state.user} />
              )
            } else {
              // Render Login
            }
          }} />
          <Route exact path='/profile' render={() => {
            // Render <Profile />
          }} />
          <Route exact path='/user/:username' render={({ params }) => {
            // Render <Profile /> Pasando params username
          }} />
        </div>
      </Router>
    )
  }
}

export default App
