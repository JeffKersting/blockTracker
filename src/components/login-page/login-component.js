import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import User from '../../user/user'

function LoginPage ({ setUser, user }) {

  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [userNotification, setNotification] = useState('')
  // const [verified, setVerification] = useState(false)

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
    setUser(userInput)
    // setVerification(true)
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
    setUser(userInput)
    // setVerification(true)
  }

  const clearInputs = () => {
    setUserInput('')
    setPasswordInput('')
  }


  return (
    <div className='login-container'>
    <h1>blockTracker</h1>
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
        onClick={event => loginUser(event)}
        >
        Login
        </button>
        <button
          onClick={event => createUser(event)}
        >
          Create Account
        </button>
      </form>
      {userNotification && <h1>{userNotification}</h1>}
      {user &&
        <Redirect to={`/dashboard/${userInput}`}
      />}
    </div>
  )
}

export default LoginPage
