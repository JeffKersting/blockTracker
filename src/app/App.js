import React, { useReducer } from 'react'
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
      <div className="App">
        <div>TEST</div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
