import React, { Component } from 'react'

import MessageList from '../MessageList'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      messages: [{
        text: 'Mensaje del Tweet',
        picture: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        displayName: 'Samuel Ramos',
        username: 'Losnen',
        date: Date.now() - 180000
      }, {
        text: 'Este es un nuevo mensaje',
        picture: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        displayName: 'Samuel Ramos',
        username: 'Losnen',
        date: Date.now() - 1800000
      }]
    }
  }
  render () {
    return (
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main
