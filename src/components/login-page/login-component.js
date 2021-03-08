import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import User from '../../user/user'

function LoginPage ({ setLoginStatus, loggedIn }) {

  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [userNotification, setNotification] = useState('')

  useEffect(() => {
    clearInputs()
  }, [])

  const userInputHandler = (event) => {
    event.preventDefault()
    setNotification('')
    setUserInput(event.target.value)
  }

  const passwordInputHandler = (event) => {
    event.preventDefault()
    setPasswordInput(event.target.value)
  }


  const createUser = (event) => {
    event.preventDefault()
    if (localStorage[userInput]) {
      setNotification(`Sorry, the username ${userInput} is already in use`)
      return
    }
    const user = new User(userInput, passwordInput)
    user.saveToStorage()
    setLoginStatus(true)
  }

  const loginUser = (event) => {
    event.preventDefault()
    if (!localStorage[userInput]) {
      setNotification(`We cannot find a user matching ${userInput}, please create a new user`)
      return
    }
    const savedUser = JSON.parse(localStorage.getItem(userInput))
    if (passwordInput !== savedUser.password) {
      setNotification('Incorrect password')
      return
    }
    setLoginStatus(true)
  }

  const clearInputs = () => {
    setUserInput('')
    setPasswordInput('')
  }


  return (
    <>
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
            name='password'
            value= {passwordInput}
            onChange = {event => passwordInputHandler(event)}
          />
          <button
          name='login'
          onClick={event => loginUser(event)}
          >
          Login
          </button>
          <button
            name='create-user'
            onClick={event => createUser(event)}
          >
            Create Account
          </button>
        </form>
        {userNotification && <h1 className='login-error'>{userNotification}</h1>}
        {loggedIn &&
          <Redirect to={`/dashboard/${userInput}`}
        />}
      </div>
      <h2 className="footer">Powered by CoinGecko API</h2>
    </>
  )
}

export default LoginPage
