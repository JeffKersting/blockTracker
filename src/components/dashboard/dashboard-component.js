import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'
import CurrencySelection from '../currency-dropdown/currency-dropdown-component'
import User from '../../user/user'
import { PropTypes } from 'prop-types'

function Dashboard({ userName }) {

  const [currentUser, setCurrentUser] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [allCoins, setAllCoins] = useState([])
  const [userFavorites, setUserFavorites] = useState([])
  const [currency, setCurrency] = useState('USD')
  const [errorMessage, setError] = useState('')

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(userName))
    setCurrentUser(new User(savedUser.name, savedUser.password, savedUser.favorites))
    setUserFavorites([...savedUser.favorites])
    fetchRequests.fetchAllCoins('USD')
      .then(results => setAllCoins(results))
      .then(setLoading(false))
      .catch(error => setError(error))
  }, [])

  useEffect(() => {
    fetchRequests.fetchAllCoins(currency)
      .then(results => setAllCoins(results))
      .then(setLoading(false))
      .catch(error => setError(error))
  }, [currency])

  const addFavorite = (event) => {
    const id = event.target.id
    let updatedFavorites;
    userFavorites.includes(id) ?
      updatedFavorites = userFavorites.filter(favorite => favorite !== id) :
      updatedFavorites = [...userFavorites, id]

    currentUser.updateFavorites(updatedFavorites)
    setUserFavorites(updatedFavorites)
  }

  const selectCurrency = (event) => {
    event.preventDefault()
    setCurrency(event.target.value)
  }

  const filterFavorites = (favorited) => {
    let filteredCoins;
    favorited === true ?
      filteredCoins = allCoins.filter(coin => userFavorites.includes(coin.id)) :
      filteredCoins = allCoins.filter(coin => !userFavorites.includes(coin.id))
    return filteredCoins
  }

  return (
    <>
      {errorMessage && <h1 className='error'>{errorMessage}</h1>}
      {!errorMessage &&
        <div className='dashboard'>
          <div className='currency-selection'>
            <h2>Currency:</h2>
            <CurrencySelection
              selectCurrency={selectCurrency}
            />
          </div>
            {isLoading && <div className='loading'><div/>Loading...</div>}
            {!isLoading &&
              <div>
              <h1 id='your-watchlist' className='coin-list'>Your Watchlist
                <WidgetDisplay
                  favorited='favorited-coin'
                  currency={currency}
                  addFavorite={event => addFavorite(event)}
                  coins={filterFavorites(true)}
                  key='favoriteCoins'
                />
              </h1>
              <h1 id='all-coins' className='coin-list'>All Coins
                {isLoading && <h1 className='loading'><div/></h1>}
                  <WidgetDisplay
                  favorited='unfavorited-coin'
                  currency={currency}
                  addFavorite={event => addFavorite(event)}
                    coins={filterFavorites(false)}
                    key='allCoins'
                  />
              </h1>
            </div>
          }
        </div>
      }
    </>
  )
}

Dashboard.propTypes = {
  userName: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  setLoginStatus: PropTypes.func
}

export default Dashboard
