import CoinWidget from '../coin-widget/coin-component'

function WidgetDisplay( { coins, favorited, addFavorite, currency, currencyFormat } ) {

  return (
    <div className='widget-display'>
      {coins.map((coin, index) =>
         <CoinWidget
          coin={coin}
          currency={currency}
          currencyFormat={currencyFormat}
          key={index}
          favorited={favorited}
          addFavorite={addFavorite}
         />)}
    </div>
  )
}

export default WidgetDisplay
