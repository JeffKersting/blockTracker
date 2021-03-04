import React, { useContext, useState } from 'react'
import AppContext from '../../context/context'

function LoginPage () {

  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const userInputHandler = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
  }

  const passwordInputHandler = (event) => {
    event.preventDefault()
    setPasswordInput(event.target.value)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='username...'
        name='username'
        value = {userInput}
        onChange = {event => userInputHandler(event)}
      />
      <input
        type='text'
        placeholder='password...'
        name='username'
        value= {passwordInput}
        onChange = {event => passwordInputHandler(event)}
      />
    </form>
  )
}

export default LoginPage
