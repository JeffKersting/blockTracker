function CoinWidget({ coin }) {

  console.log(coin)

  return (
    <div className='widget-container'>
      <h1>{coin.id}
      <img src={coin.image}/>
      </h1>
      <h2>Symbol: {coin.symbol}</h2>
      <h2>{coin.current_price}</h2>
    </div>
  )
}

export default CoinWidget
