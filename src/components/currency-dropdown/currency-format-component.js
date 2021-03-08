const CurrencyFormatSelection = ({ selectFormat }) => {

  const formats = [
   'en-US',
   'en-AU',
   'en-CA',
   'en-NZ',
   'en-IN',
   'en-GB',
   'en-ZA',
   'ar-SA',
   'es-AR',
   'es-CO',
   'es-CL',
   'es-MX',
   'bn-BD',
   'pt-BR',
   'fr-CH',
   'cs-CZ',
   'da-DK',
   'zh-HK',
   'hu-HU',
   'he-IL',
   'ta-LK',
   'no-NO',
   'pl-PL',
   'sv-SE',
   'th-TH',
   'tr-TR',
   'ru-RU',
  ]

  return (
    <select
      onChange={event => selectFormat(event)}
      name='format'
    >
      {
      formats.map(format => {
        return <option value={format}> {format} </option>
      })
      }
    </select>
  )
}

export default CurrencyFormatSelection

// const currencies = [
//   { currency: 'USD', locale: 'en-US'},
//   { currency: 'AED', locale: 'ar-SA'},
//   { currency: 'ARS', locale: 'es-AR'},
//   { currency: 'AUD', locale: 'en-AU'},
//   { currency: 'BDT', locale: 'bn-BD'},
//   { currency: 'BHD', locale: 'ar-SA'},
//   { currency: 'BMD', locale: 'en-US'},
//   { currency: 'BRL', locale: 'pt-BR'},
//   { currency: 'CAD', locale: 'en-CA'},
//   { currency: 'CHF', locale: 'fr-CH'},
//   { currency: 'CLP', locale: 'es-CL'},
//   { currency: 'CZK', locale: 'cs-CZ'},
//   { currency: 'DKK', locale: 'da-DK'},
//   { currency: 'EUR', locale: 'en-GB'},
//   { currency: 'GBP', locale: 'en-GB'},
//   { currency: 'HKD', locale: 'zh-HK'},
//   { currency: 'HUF', locale: 'hu-HU'},
//   { currency: 'ILS', locale: 'he-IL'},
//   { currency: 'INR', locale: 'en-IN'},
//   { currency: 'KWD', locale: 'ar-SA'},
//   { currency: 'LKR', locale: 'ta-LK'},
//   { currency: 'MMK', locale: 'en-US'},
//   { currency: 'MXN', locale: 'es-MX'},
//   { currency: 'MYR', locale: 'en-US'},
//   { currency: 'NGN', locale: 'en-US'},
//   { currency: 'NOK', locale: 'no-NO'},
//   { currency: 'NZD', locale: 'en-NZ'},
//   { currency: 'PHP', locale: 'en-US'},
//   { currency: 'PKR', locale: 'en-US'},
//   { currency: 'PLN', locale: 'pl-PL'},
//   { currency: 'SAR', locale: 'ar-SA'},
//   { currency: 'SEK', locale: 'sv-SE'},
//   { currency: 'SGD', locale: 'en-US'},
//   { currency: 'THB', locale: 'th-TH'},
//   { currency: 'TRY', locale: 'tr-TR'},
//   { currency: 'UAH', locale: 'ru-RU'},
//   { currency: 'VEF', locale: 'es-CO'},
//   { currency: 'VND', locale: 'en-US'},
//   { currency: 'ZAR', locale: 'en-ZA'}
// ]
