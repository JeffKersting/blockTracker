import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/login-page/login-component'
import Dashboard from '../components/dashboard/dashboard-component'


function App() {

  return (
    <>
      <Switch>
        <Route
          exact path='/'
          render= {() => {
            return (
              <LoginPage/>
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
