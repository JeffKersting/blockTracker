describe('Fetch request error handling', () => {
  it('Should display an error message if the fetch request fails', () => {
    cy.fixture('../fixtures/coinsUSD.json')
      .then((response) => {
        cy.intercept("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
          statusCode: 404,
          body: response
        })
    })
    cy.visit('http://localhost:3000')
      .get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
      .get('.error').should('contain', 'Uh oh! Our server is experiencing some difficulties right now, please refresh the page!')
    })

  it('Should not render any other elements except the header on the page when an error is thrown', () => {
    cy.get('.header').should('exist')
      .get('.currency-selection').should('not.exist')
      .get('h1[id=your-watchlist]').should('not.exist')
      .get('h1[id=all-coins]').should('not.exist')
  })
})
