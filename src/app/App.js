import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'


function App() {

  const [user, setUser] = useState('')

  return (
    <>
      <Switch>
        <Route
          exact path='/'
          render= {() => {
            return (
              <LoginPage
                user={user}
                setUser={setUser}
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
                setUser={setUser}
              />
            )}
          }
        />
      </Switch>

    </>
  );
}

export default App;
