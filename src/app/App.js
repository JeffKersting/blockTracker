import React, { useReducer } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/login-page/login-component'
import AppContext from '../context/context'

const initialState = {
  user: '',
  theme: 'dark',
  favorited: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, user: action.user}
    case 'FAVORITE_COIN':
      return {...state, favorited: [...state.favorited, action.favorite]}
    default:
        return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
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

    </AppContext.Provider>
  );
}

export default App;
