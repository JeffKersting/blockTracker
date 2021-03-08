describe('Login Page', () => {
  it('Should render with a header with no login button', () => {
    cy.visit('http://localhost:3000')
      .get('.header').should('exist')
      .get('.header').should('contain', 'blockTracker')
      .get('.header button').should('not.exist')
  })

  it('Should have a login form with inputs and login/create user buttons', () => {
    cy.get('.login-container').should('exist')
      .get('form').should('exist')
      .get('form input[name=username]').should('exist')
      .get('form input[name=password]').should('exist')
      .get('form button[name=login]').should('exist')
      .get('form button[name=create-user]').should('exist')
  })

  it('Should not have error messages present on initial page load', () => {
    cy.get('.login-error').should('not.exist')
  })

  it('Should not allow users to login if there is no existing user', () => {
    cy.get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=login]').click()
      .get('.login-error').should('contain', 'We cannot find a user matching testUser, please create a new user')
      .get('input[name=username]').clear()
      .get('input[name=password]').clear()
  })

  it('Should allow new users to create an account', () => {
    cy.get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
      .get('.header button').click()
  })

  it('Should display an error message if a user uses an existing user name', () => {
    cy.get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
      .get('.header button').click()
      .get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
      .get('.login-error').should('contain', 'Sorry, the username testUser is already in use')
      .get('input[name=username]').clear()
      .get('input[name=password]').clear()
  })

  it('Should notify users if the password is entered incorrectly', () => {
    cy.get('input[name=username]').type('testUser')
      .get('input[name=password]').type('password')
      .get('button[name=create-user]').click()
      .get('.header button').click()
      .get('input[name=username]').type('testUser')
      .get('input[name=password]').type('incorrectPassword')
      .get('button[name=login]').click()
      .get('.login-error').should('contain', 'Incorrect password')
  })
})
