import fetchRequests from '../../utilities/fetch-requests'
import React, { useState, useEffect } from 'react'
import WidgetDisplay from '../widget-display/widget-display-component'

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
