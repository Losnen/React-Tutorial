import React, { Component } from 'react'

import styles from './profileBar.css'

class ProfileBar extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className={styles.root}>
        <figure>
          <img className={styles.avatar} src={this.props.picture} />
        </figure>
        <span className={styles.username}> Hola @{this.props.username} </span>
        <button className={styles.button} onClick={this.props.onOpenText}>
          <span className='fa fa-lg fa-edit' /> Tweet
        </button>
      </div>
    )
  }
}

export default ProfileBar
