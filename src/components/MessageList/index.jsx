import React from 'react'

import Message from '../Message'

import styles from './message-list.css'

function MessageList ({ messages, onRetweet, onFavorite, onReplyTweet }) {
  return (
    <div className={styles.root}>
      {messages.map(msg => {
        return (
          <Message
            key={msg.id}
            text={msg.text}
            picture={msg.picture}
            displayName={msg.displayName}
            username={msg.username}
            date={msg.date}
            numRetweets={msg.retweets}
            numFavorites={msg.favorites}
            onRetweet={() => onRetweet(msg.id)}
            onFavorite={() => onFavorite(msg.id)}
            onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
          />
        )
      }).reverse()}
    </div>
  )
}

export default MessageList
