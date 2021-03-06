import CoinWidget from '../coin-widget/coin-component'

function WidgetDisplay( { coins, favorited } ) {

  return (
    <div className='widget-display'>
      {coins.map((coin, index) =>
         <CoinWidget
          coin={coin}
          key={index}
          favorited={favorited}
         />)}
    </div>
  )
}

export default WidgetDisplay
