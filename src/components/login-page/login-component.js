import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import User from '../../user/user'

function LoginPage () {

  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [userNotification, setNotification] = useState('')
  const [verified, setVerification] = useState(false)

  const userInputHandler = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
  }

  const passwordInputHandler = (event) => {
    event.preventDefault()
    setPasswordInput(event.target.value)
  }


  const createUser = (event) => {
    event.preventDefault()
    if (localStorage[userInput]) {
      setNotification('Sorry, this username is already taken')
      return
    }
    const user = new User(userInput, passwordInput)
    user.saveToStorage()
    setVerification(true)
  }

  const loginUser = (event) => {
    event.preventDefault()
    if (!localStorage[userInput]) {
      setNotification('We cannot find a user matching that name, please create a new user')
      return
    }
    const savedUser = JSON.parse(localStorage.getItem(userInput))
    if (passwordInput !== savedUser.password) {
      setNotification('Incorrect password!')
      return
    }
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
        >
          Create Account
        </button>
        <button
          onClick={event => loginUser(event)}
        >
          Login
        </button>
      </form>
      {userNotification && <h1>{userNotification}</h1>}
      {verified && <Redirect to={`/dashboard/${userInput}`} />}
    </>
  )
}

export default LoginPage
