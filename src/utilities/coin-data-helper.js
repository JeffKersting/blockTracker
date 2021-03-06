const generateCoinData = (coin) => {


  const priceChangeStyling = coin.price_change_24h > 0 ? 'positive' : 'negative'
  const priceChangeSymbol = priceChangeStyling === 'positive' ? '+' : '-'
  const favoriteStatus = 'favorited-coin' ? 'Unwatch' : 'Watch'

  return {
    changeStyle: priceChangeStyling,
    changeSymbol: priceChangeSymbol,
    favorited: favoriteStatus
  }
}

export default generateCoinData
