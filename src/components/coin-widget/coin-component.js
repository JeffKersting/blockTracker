import generateCoinData from '../../utilities/coin-data-helper'

function CoinWidget({ coin, favorited, addFavorite, currency, currencyFormat }) {


  const priceChange = coin.price_change_24h > 0 ? 'positive' : 'negative'
  const priceChangeSymbol = priceChange === 'positive' ? '+' : ''
  const favoriteStatus = favorited === 'favorited-coin' ? 'Unwatch' : 'Watch'
  const formattedCoin = coin.current_price.toLocaleString(
    `${currencyFormat}`, {
      style: 'currency',
      currency: `${currency}`
    })

  return (
    <div className='widget-container'>
      <div className='widget-header'>
        <h1>{coin.name}</h1>
        <img
          src={coin.image}
          alt={coin.id}
        />
      </div>
      <div className='widget-body'>
        <h2>Symbol: </h2>
        <h2>{coin.symbol}</h2>
        <h2>Current Price:</h2>
        <h2>{formattedCoin}</h2>
        <h2>24 hour change:</h2>
        <h2 className={priceChange}>{priceChangeSymbol} {coin.price_change_24h}</h2>
        <h2>24hr % change:</h2>
        <h2 className={priceChange}>{priceChangeSymbol} {coin.price_change_percentage_24h}</h2>
        <h2>Market cap:</h2>
        <h2>{coin.market_cap}</h2>
        <h2>Total Volume:</h2>
        <h2>{coin.total_volume}</h2>
      </div>
      <div
        className={`favorite ${favorited}`}
        id={coin.id}
        onClick={event => addFavorite(event)}
      >
        {favoriteStatus}
      </div>
    </div>
  )
}

export default CoinWidget
