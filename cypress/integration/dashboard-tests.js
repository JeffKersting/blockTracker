describe('Dashboard Page', () => {
  it('Should take users to the dashboard page on login/account creation', () => {
    cy.visit('http://localhost:3000')
      .get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
  })

  it('Should render with a header that includes a logout button', () => {
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

  //Add currency/format change after making intercepts
})
