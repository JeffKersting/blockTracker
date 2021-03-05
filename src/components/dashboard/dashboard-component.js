import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import CoinWidget from '../coin-widget/coin-component'

function Dashboard() {

  const [allCoins, setAllCoins] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchRequests.fetchAllCoins()
    .then(results => setAllCoins(results))
    .then(setLoading(false))
  }, [])




  return (
    <>
      <h1>All Coins
        {!isLoading &&
          allCoins.map(coin => <CoinWidget coin={coin}/>)
        }
      </h1>
    </>
  )
}

export default Dashboard
