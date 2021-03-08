import { PropTypes } from 'prop-types'

function CoinWidget({ coin, favorited, addFavorite, currency }) {

  const priceChange = coin.price_change_24h > 0 ? 'positive' : 'negative'
  const priceChangeSymbol = priceChange === 'positive' ? '+' : ''
  const favoriteStatus = favorited === 'favorited-coin' ? 'Unwatch' : 'Watch'
  const formattedCoin = coin.current_price.toLocaleString(
    `en-US`, {
      style: 'currency',
      currency: `${currency}`
    })

  return (
    <div className='widget-container' name={coin.id}>
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
        <h2>24hr change:</h2>
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

CoinWidget.propTypes = {
  coin: PropTypes.shape(
    {
      current_price: PropTypes.number,
      id: PropTypes.string,
      image: PropTypes.string,
      market_cap: PropTypes.number,
      name: PropTypes.string,
      price_change_24h: PropTypes.number,
      price_change_percentage_24h: PropTypes.number,
      symbol: PropTypes.string,
      total_volume: PropTypes.number
    }
  ),
  currency: PropTypes.string,
  favorited: PropTypes.string,
  addFavorite: PropTypes.func
}

export default CoinWidget
