import CoinWidget from '../coin-widget/coin-component'
import { PropTypes } from 'prop-types'

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

WidgetDisplay.propTypes = {
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
  favorited: PropTypes.string,
  addFavorite: PropTypes.func,
  currency: PropTypes.string
}



export default WidgetDisplay
