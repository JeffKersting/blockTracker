import CoinWidget from '../coin-widget/coin-component'

function WidgetDisplay( { coins } ) {

  return (
    <>
      {coins.map((coin, index) =>
         <CoinWidget
          coin={coin}
          key={index}
         />)}
    </>
  )
}

export default WidgetDisplay
