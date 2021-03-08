const fetchRequests = {

  errorHandler: (response) => {
    if(!response.ok) {
      const errorMessage = 'Our server is experiencing some difficulties right now, please refresh the page.'
      throw errorMessage;
    }
    return response;
  },


  fetchAllCoins: (currency) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(response => fetchRequests.errorHandler(response))
    .then(response => response.json())
  }
}

export default fetchRequests
