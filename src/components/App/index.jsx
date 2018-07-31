import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import './app.css'
import 'normalize-css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        email: 'samuelrb1@gmail.com',
        displayName: 'Samuel Ramos',
        location: 'Tenerife'
      }
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
  }

  handleOnAuth () {
    console.log('auth')
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
              return (
                <Login onAuth={this.handleOnAuth} />
              )
            }
          }} />
          <Route exact path='/profile' render={() => {
            return (
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email.split('@')[0]}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAddress={this.state.user.email}
              />
            )
          }} />
          <Route exact path='/user/:username' render={({ match }) => {
            return (
              <Profile
                username={match.params.username}
                displayName={match.params.username}
              />
            )
          }} />
        </div>
      </Router>
    )
  }
}

export default App
