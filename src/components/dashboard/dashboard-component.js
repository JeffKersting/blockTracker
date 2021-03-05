import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'

function Dashboard() {

  const [allCoins, setAllCoins] = useState([])
  const [favoriteCoins, setFavorite] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [userFavorites, setUserFavorites] = useState(['ethereum', 'basic-attention-token', 'aave'])

  useEffect(() => {
    fetchRequests.fetchAllCoins()
      .then(results => setAllCoins(results))
      .then(setLoading(false))
  }, [])




  return (
    <>
    <h1>Favorite Coins
      {!isLoading &&
        <WidgetDisplay
          coins={allCoins.filter(coin => userFavorites.includes(coin.id))}
          key='allCoins'
        />
      }
    </h1>
      <h1>All Coins
        {!isLoading &&
          <WidgetDisplay
            coins={allCoins}
            key='allCoins'
          />
        }
      </h1>
    </>
  )
}

export default Dashboard
