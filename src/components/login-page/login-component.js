import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import User from '../../user/user'

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

  const userLogin = (event) => {

  }

  const createUser = (event) => {
    event.preventDefault()
    const user = new User(userInput, passwordInput)
    user.saveToStorage()
    return <Redirect to='/dashboard'/>
  }

  const clearInputs = () => {
    setUserInput('')
    setPasswordInput('')
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
      <button
        onClick={event => createUser(event)}
      >Create Account
      </button>
      <Link to={'/dashboard'}>
        <button>Login</button>
      </Link>

    </form>
  )
}

export default LoginPage
