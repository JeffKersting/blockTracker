import CoinWidget from '../coin-widget/coin-component'

function WidgetDisplay( { coins } ) {

  return (
    <div className='widget-display'>
      {coins.map((coin, index) =>
         <CoinWidget
          coin={coin}
          key={index}
         />)}
    </div>
  )
}

export default WidgetDisplay
