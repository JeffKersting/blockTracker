describe('Coin Widget', () => {

  it('Should render coins on the dashboard page after user login', () => {
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
})
