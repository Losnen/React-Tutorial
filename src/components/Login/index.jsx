import React, { PropTypes } from 'react'

import styles from './login.css'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

function Login ({ onAuth }) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
          Necesitamos que inicies sesión con tu cuenta de GitHub para que leas y escribas mensajes
        </p>
      <button
        className={styles.login}
        onClick={onAuth}
        >
        <span className='fab fa-github' /> Login con GitHub
      </button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
