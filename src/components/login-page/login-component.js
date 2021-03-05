import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import User from '../../user/user'

function LoginPage ({ setUser }) {

  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [verified, setVerification] = useState(false)

  const userInputHandler = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
  }

  const passwordInputHandler = (event) => {
    event.preventDefault()
    setPasswordInput(event.target.value)
  }

  const userLogin = (event) => {

  }

  const createUser = (event) => {
    event.preventDefault()
    if (localStorage[userInput]) {
      console.log('username taken')
      return
    }
    const user = new User(userInput, passwordInput)
    user.saveToStorage()
    setUser(user)
    setVerification(true)
  }

  const clearInputs = () => {
    setUserInput('')
    setPasswordInput('')
  }


  return (
    <>
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
        <button
          onClick={event => createUser(event)}
        >Create Account
        </button>
        <Link to={'/dashboard'}>
          <button>Login</button>
        </Link>
      </form>
      {verified && <Redirect to='/dashboard' />}
    </>
  )
}

export default LoginPage
