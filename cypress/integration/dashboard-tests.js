describe('Dashboard Page', () => {

  it('Should take users to the dashboard page on login/account creation', () => {
    cy.fixture('../fixtures/coinsUSD.json')
      .then((response) => {
        cy.intercept("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
          statusCode: 200,
          body: response
        })
    })
    cy.visit('http://localhost:3000')
      .get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
  })

  it('Should include a header that includes a logout button', () => {
    cy.get('.header').should('exist')
      .get('.header').should('contain', 'blockTracker')
      .get('.header button').should('contain', 'Logout')
  })

  it('Should include a currency selection that defaults to USD', () => {
    cy.get('.currency-selection').should('contain', 'Currency:')
      .get('select[name=currency]').should('have.value', 'USD')
  })

  it('Should include a currency format selection that defaults to en-US', () => {
    cy.get('.currency-selection').should('contain', 'Currency Format:')
      .get('select[name=format]').should('have.value', 'en-US')
  })

  it('Should not include any coins in Your Watchlist section on initial page load', () => {
    cy.get('h1[id=your-watchlist]')
      .get('widget-container').should('not.exist')
  })

  it('Should include bitcoin in the All Coins section', () => {
    cy.get('h1[id=all-coins]')
      .get('div[name=bitcoin]').should('exist')
      .should('contain', 'Bitcoin')
      .and('contain', 'Symbol:')
      .and('contain', 'btc')
      .and('contain', 'Current Price:')
      .and('contain', '$50,776.00')
      .and('contain', '24hr change:')
      .and('contain', '+ 937.26')
      .and('contain', '24hr % change:')
      .and('contain', '+ 1.8806')
      .and('contain', 'Market cap:')
      .and('contain', '951576368383')
      .and('contain', 'Total Volume:')
      .and('contain', '45897251866')
  })

  it('Should include Watch selection on coin widgets', () => {
    cy.get('div[name=bitcoin]')
      .get('div[id=bitcoin]').should('exist')
  })

  it('Should allow user to add coins to their watchlist', () => {
    cy.get('div[id=bitcoin]').click()
      .get('h1[id=your-watchlist] div[name=bitcoin]')
  })

  it('Should remove coins from watchlist when Unwatch is clicked', () => {
    cy.get('div[id=bitcoin]').click()
      .get('h1[id=your-watchlist] div[name=bitcoin]').should('not.exist')
  })

  it('Should allow users to select a different currency and update the coin data', () => {
    cy.fixture('../fixtures/coinsEUR.json')
      .then((response) => {
        cy.intercept("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
          statusCode: 200,
          body: response
        })
    })
    cy.get('select[name=currency]')
      .select('EUR')
      .get('div[name=bitcoin]')
      .should('contain', '€50,521.00')

  })

})
