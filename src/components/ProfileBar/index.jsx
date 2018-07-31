import React from 'react'
import { Link } from 'react-router-dom'

import styles from './profileBar.css'

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

export default ProfileBar
