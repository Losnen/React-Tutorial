import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import uuid from 'uuid'

import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

const propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
      onOpenText: false,
      usernameToReply: '',
      messages: []
    }
    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.handleReplyTweet = this.handleReplyTweet.bind(this)
  }

  async componentWillMount () {
    const messagesRef = firebase.database().ref().child('messages')

    messagesRef.on('child_added', snapshot => {
      this.setState({
        messages: this.state.messages.concat(snapshot.val()),
        onOpenText: false
      })
    })
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

    const messagesRef = firebase.database().ref().child('messages')

    const messageID = messagesRef.push()
    messageID.set(newMessage)

    this.setState({
      onOpenText: false
    })
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
          onLogout={this.props.onLogout}
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

Main.propTypes = propTypes

export default Main
