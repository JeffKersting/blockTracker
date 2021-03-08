const CurrencySelection = ({ selectCurrency }) => {

  const currencies = [
    'USD',
    'AED',
    'ARS',
    'AUD',
    'BDT',
    'BHD',
    'BMD',
    'BRL',
    'CAD',
    'CHF',
    'CLP',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HUF',
    'ILS',
    'INR',
    'KWD',
    'LKR',
    'MMK',
    'MXN',
    'MYR',
    'NGN',
    'NOK',
    'NZD',
    'PHP',
    'PKR',
    'PLN',
    'SAR',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'UAH',
    'VEF',
    'VND',
    'ZAR '
  ]

  return (
    <select onChange={event => selectCurrency(event)}>
      {
      currencies.map(currency => {
        return <option value={currency}> {currency} </option>
      })
      }
    </select>
  )
}

export default CurrencySelection
