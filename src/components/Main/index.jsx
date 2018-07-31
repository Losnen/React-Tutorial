import React, { Component } from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
      onOpenText: false,
      usernameToReply: '',
      messages: [{
        id: uuid.v4(),
        text: 'Mensaje del Tweet',
        picture: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        displayName: 'Samuel Ramos',
        username: 'samuelrb1',
        date: Date.now() - 180000,
        retweets: 0,
        favorites: 0
      }, {
        id: uuid.v4(),
        text: 'Este es un nuevo mensaje',
        picture: 'https://pbs.twimg.com/profile_images/1005086461232910336/duCR-EIz_bigger.jpg',
        displayName: 'Samuel Ramos',
        username: 'Losnen',
        date: Date.now() - 1800000,
        retweets: 0,
        favorites: 0
      }]
    }
    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.handleReplyTweet = this.handleReplyTweet.bind(this)
  }

  handleSendText (event) {
    event.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      displayName: this.props.user.displayName,
      username: this.props.user.email.split('@')[0],
      date: Date.now(),
      text: event.target.text.value,
      picture: this.props.user.photoURL,
      retweets: 0,
      favorites: 0
    }

    this.setState({
      messages: this.state.messages.concat([newMessage])
    })
    this.setState({ onOpenText: false })
  }

  handleReplyTweet (msgId, usernameToReply) {
    this.setState({
      onOpenText: true,
      usernameToReply
    })
  }

  handleCloseText (event) {
    event.preventDefault()
    this.setState({ onOpenText: false })
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({ onOpenText: true })
  }

  renderOpenText () {
    if (this.state.onOpenText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          usernameToReply={this.state.usernameToReply}
        />
      )
    }
  }

  handleRetweet (msgId) {
    let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)

    if (alreadyRetweeted.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.retweets++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleFavorite (msgId) {
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)
    if (alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.favorites++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  render () {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTweet}
        />
      </div>
    )
  }
}

export default Main
