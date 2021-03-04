import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'

function Dashboard() {

  const [allCoins, setAllCoins] = useState([])

  useEffect(() => {
    fetchRequests.fetchAllCoins()
    .then(results => setAllCoins(results))  
  }, [])




  return (
    <>
      <h1>All Coins

      </h1>
    </>
  )
}

export default Dashboard
