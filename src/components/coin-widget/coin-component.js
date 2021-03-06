function CoinWidget({ coin, favorited, addFavorite }) {

  let favoriteStatus
  favorited === 'favorited-coin' ? favoriteStatus='Unwatch' : favoriteStatus='Watch'
  console.log(coin)
  return (
    <div className='widget-container'>
      <h1>{coin.id}
      <img
        src={coin.image}
        alt={coin.id}
      />
      </h1>
      <h2>Symbol: {coin.symbol}</h2>
      <h2>
        {coin.current_price.toLocaleString('en-us', {
          style: 'currency',
          currency: 'USD'
        })}
      </h2>
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
