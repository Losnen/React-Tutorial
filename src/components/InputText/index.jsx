import React, { PropTypes } from 'react'

import styles from './inputText.css'

const propTypes = {
  usernameToReply: PropTypes.string.isRequired,
  onSendText: PropTypes.func.isRequired,
  onCloseText: PropTypes.func.isRequired
}

function InputText ({ onSendText, usernameToReply, onCloseText }) {
  return (
    <form className={styles.form} onSubmit={onSendText}>
      <textarea className={styles.text} name='text' defaultValue={(usernameToReply) ? `@${usernameToReply} ` : ''} />
      <div className={styles.buttons}>
        <button className={styles.close}onClick={onCloseText}>Cerrar</button>
        <button className={styles.send} type='submit'>Enviar</button>
      </div>
    </form>
  )
}

InputText.propTypes = propTypes

export default InputText
