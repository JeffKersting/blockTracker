import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/header/header-component'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'

function App() {

  const [loggedIn, setLoginStatus] = useState(false)

  useEffect(() => {
    setLoginStatus(false)
  }, [])

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setLoginStatus={setLoginStatus}
      />
      {!loggedIn && <Redirect to='/login' />}
      <Switch>
        <Route
          exact path='/dashboard'
          render= {() => {
            return (
              <Redirect to='/login' />
            )}
          }
        />
        <Route
          exact path='/login'
          render= {() => {
            return (
              <LoginPage
                loggedIn={loggedIn}
                setLoginStatus={setLoginStatus}
              />
            )}
          }
        />
        <Route
          exact path='/dashboard/:userName'
          render= {({match}) => {
            return (
              <Dashboard
                userName={match.params.userName}
              />
            )}
          }
        />
      </Switch>
    </>
  );
}

export default App;
