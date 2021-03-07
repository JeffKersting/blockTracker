import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/header/header-component'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'


function App() {

  const [loggedIn, setLoginStatus] = useState(false)

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setLoginStatus={setLoginStatus}
      />
      <Switch>
        <Route
          exact path='/'
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
                setLoginStatus={setLoginStatus}
              />
            )}
          }
        />
      </Switch>

    </>
  );
}

export default App;
