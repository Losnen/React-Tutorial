import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import styles from './profile.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

function Profile ({ picture, displayName, username, emailAddress, location }) {
  return (
    <div className={styles.root}>
      <Link to='/profile'>
        <figure>
          <img className={styles.avatar} src={picture} />
        </figure>
      </Link>
      <span className={styles.name}> {displayName} </span>
      <ul className={styles.data}>
        <li>
          <span className='fa fa-user' /> {username}
        </li>
        <li>
          <span className='fa fa-envelope' /> {emailAddress}
        </li>
        <li>
          <span className='fa fa-map-marker' /> {location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
