import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'


function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <Switch>
        <Route
          exact path='/'
          render= {() => {
            return (
              <LoginPage />
            )}
          }
        />
        <Route
          exact path='/dashboard'
          render= {() => {
            return (
              <Dashboard />
            )}
          }
        />
      </Switch>

    </>
  );
}

export default App;
