import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'

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
      user: null
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  async componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  async handleOnAuth () {
    try {
      const provider = new firebase.auth.GithubAuthProvider()

      let result = await firebase.auth().signInWithPopup(provider)
      console.log(`${result.user.email} Ha iniciado sesión`)
    } catch (error) {
      console.error(`Error: ${error.code}: ${error.message}`)
    }
  }

  async handleLogout () {
    try {
      await firebase.auth().signOut
      this.setState({ user: null })
      console.log('Te has desconectado')
    } catch (error) {
      console.error(error)
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
                <Main
                  user={this.state.user}
                  onLogout={this.handleLogout}
                />
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
