import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/header/header-component'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'


function App() {

  const [loggedIn, setLoginStatus] = useState(false)

  useEffect(() => {
    setLoginStatus(true)
  }, [])

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setLoginStatus={setLoginStatus}
      />
      <Dashboard
        userName={'jeff'}
        setLoginStatus={setLoginStatus}
      />
    </>
  );
}

export default App;
