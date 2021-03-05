import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'
import User from '../../user/user'

function Dashboard({ userName }) {

  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [allCoins, setAllCoins] = useState([])
  const [userFavorites, setUserFavorites] = useState(['ethereum', 'basic-attention-token', 'aave'])

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem(userName))
    setCurrentUser(new User(savedUser.name, savedUser.password, savedUser.favorites))
    console.log(currentUser)
    fetchRequests.fetchAllCoins()
      .then(results => setAllCoins(results))
      .then(setLoading(false))
  }, [])


  return (
    <div className='dashboard'>
    <h1>Your Watchlist
      {!isLoading &&
        <WidgetDisplay
          coins={
            allCoins.filter(coin => userFavorites.includes(coin.id))
          }
          key='allCoins'
        />
      }
    </h1>
      <h1>All Coins
        {!isLoading &&
          <WidgetDisplay
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
