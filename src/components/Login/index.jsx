import React from 'react'

import styles from './login.css'

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
        <span className='fa fa-github' /> Login con GitHub
      </button>
    </div>
  )
}

export default Login
