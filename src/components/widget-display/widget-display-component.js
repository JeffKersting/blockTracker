import CoinWidget from '../coin-widget/coin-component'

function WidgetDisplay( { coins, favorited, addFavorite } ) {

  return (
    <div className='widget-display'>
      {coins.map((coin, index) =>
         <CoinWidget
          coin={coin}
          key={index}
          favorited={favorited}
          addFavorite={addFavorite}
         />)}
    </div>
  )
}

export default WidgetDisplay
