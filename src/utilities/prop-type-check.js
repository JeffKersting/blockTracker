import PropTypes from 'prop-types'
import CoinWidget from '../components/coin-widget/coin-component'

//widget proptype test
const propTypeCheck = {
  coinWidgetCheck: () => {
    CoinWidget.propTypes = {
      coin: PropTypes.arrayOf(PropTypes.shape(
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
      )),
      currency: PropTypes.string,
      favorited: PropTypes.string,
      addFavorite: PropTypes.func
    }
  }  
}

//
// LoginComponent.propTypes = {
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
//   onChange: PropTypes.func
// }
//
// Dashboard.propTypes = {
//   userName: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol])
// }

export default propTypeCheck
