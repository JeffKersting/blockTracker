import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import User from '../../user/user'
import { PropTypes } from 'prop-types'

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
          <label htmlFor='username' value='username input' />
          <input
            type='text'
            placeholder='username...'
            name='username'
            value = {userInput}
            autoComplete='off'
            onChange = {event => userInputHandler(event)}
          />
          <label htmlFor='password' value='password input' />
          <input
            type='text'
            placeholder='password...'
            name='password'
            value= {passwordInput}
            autoComplete='off'
            onChange = {event => passwordInputHandler(event)}
          />
          <label htmlFor='login' value='login submit' />
          <button
            name='login'
            onClick={event => loginUser(event)}
          > Login
          </button>
          <label htmlFor='create-user' value='create user submit' />
          <button
            name='create-user'
            onClick={event => createUser(event)}
          > Create Account
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

LoginPage.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  onChange: PropTypes.func
}

export default LoginPage
