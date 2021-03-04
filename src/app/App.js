import React, { useReducer } from 'react'
import AppContext from '../context/context'
import './App.css';

const initialState = {
  user: '',
  theme: 'dark',
  favorited: []
}

const reducer = {state, action} => {
  switch(action.type) {
    case 'ADD_USER':
      return {...state, user: action.user}
    case 'FAVORITE_COIN':
      return {...state, favorited: [...state.favorited, action.favorite]}
  }
}

function App() {


  return (
    <div className="App">
    </div>
  );
}

export default App;
