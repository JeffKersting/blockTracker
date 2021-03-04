import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/login-page/login-component'


function App() {


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
              <div>DASHBOARD TEST</div>
            )}
          }
        />
      </Switch>

    </>
  );
}

export default App;
