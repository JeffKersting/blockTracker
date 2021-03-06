function CoinWidget({ coin, favorited }) {

  console.log(favorited)

  return (
    <div className='widget-container'>
      <h1>{coin.id}
      <img
        src={coin.image}
        alt={coin.id}
      />
      </h1>
      <h2>Symbol: {coin.symbol}</h2>
      <h2>{coin.current_price}</h2>
      <div className={favorited}/>
    </div>
  )
}

export default CoinWidget
