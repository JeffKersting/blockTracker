import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect, useRef } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'
import CurrencySelection from '../currency-dropdown/currency-dropdown-component'
import User from '../../user/user'

function Dashboard({ userName, setLoginStatus }) {

  const [currentUser, setCurrentUser] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [allCoins, setAllCoins] = useState([])
  const [userFavorites, setUserFavorites] = useState([])
  const [currency, setCurrency] = useState('USD')

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(userName))
    setLoginStatus(true)
    setCurrentUser(new User(savedUser.name, savedUser.password, savedUser.favorites))
    setUserFavorites([...savedUser.favorites])
    fetchRequests.fetchAllCoins()
      .then(results => setAllCoins(results))
      .then(setLoading(false))
  }, [])

  useEffect(() => {
    console.log(currency)
  }, [currency])

  const addFavorite = (event) => {
    const id = event.target.id
    let updatedFavorites;
    userFavorites.includes(id) ?
      updatedFavorites = userFavorites.filter(favorite => favorite !== id)
      :
      updatedFavorites = [...userFavorites, id]

    currentUser.updateFavorites(updatedFavorites)
    setUserFavorites(updatedFavorites)
  }

  const selectCurrency = (event) => {
    event.preventDefault()
    setCurrency(event.target.value)
  }


  return (
    <div className='dashboard'>
      <CurrencySelection
        selectCurrency={selectCurrency}
      />
      <h1>Your Watchlist
        {!isLoading &&
          <WidgetDisplay
            favorited='favorited-coin'
            addFavorite={event => addFavorite(event)}
            coins={
              allCoins.filter(coin => userFavorites.includes(coin.id))
            }
            key='favoriteCoins'
          />
        }
      </h1>
        <h1>All Coins
          {!isLoading &&
            <WidgetDisplay
            favorited='unfavorited-coin'
            addFavorite={event => addFavorite(event)}
              coins={
                allCoins.filter(coin => !userFavorites.includes(coin.id))
              }
              key='allCoins'
            />
          }
        </h1>
    </div>
  )
}

export default Dashboard
