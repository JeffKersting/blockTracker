import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'
import CurrencySelection from '../currency-dropdown/currency-dropdown-component'
import User from '../../user/user'
import { PropTypes } from 'prop-types'

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
    fetchRequests.fetchAllCoins(currency)
      .then(results => setAllCoins(results))
      .then(setLoading(false))
  }, [])

  useEffect(() => {
    fetchRequests.fetchAllCoins(currency)
      .then(results => setAllCoins(results))
      .then(setLoading(false))
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
      <div className='currency-selection'>
        <h2>Currency:</h2>
        <CurrencySelection
          selectCurrency={selectCurrency}
        />
      </div>
      <h1 id='your-watchlist'>Your Watchlist
        {!isLoading &&
          <WidgetDisplay
            favorited='favorited-coin'
            currency={currency}
            addFavorite={event => addFavorite(event)}
            coins={
              allCoins.filter(coin => userFavorites.includes(coin.id))
            }
            key='favoriteCoins'
          />
        }
      </h1>
        <h1 id='all-coins'>All Coins
          {!isLoading &&
            <WidgetDisplay
            favorited='unfavorited-coin'
            currency={currency}
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

Dashboard.propTypes = {
  userName: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  setLoginStatus: PropTypes.func
}

export default Dashboard
