import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import styles from './profileBar.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
}

function ProfileBar ({ picture, username, onOpenText }) {
  return (
    <div className={styles.root}>
      <Link to='/profile'>
        <figure>
          <img className={styles.avatar} src={picture} />
        </figure>
      </Link>
      <span className={styles.username}>   Hola @{username} </span>
      <button className={styles.button} onClick={onOpenText}>
        <span className='fa fa-lg fa-edit' /> Tweet
        </button>
    </div>
  )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
