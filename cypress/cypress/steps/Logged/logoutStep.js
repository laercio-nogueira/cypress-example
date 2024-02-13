Given("Que eu esteja logado no sistema", () => {
  cy.visit('http://localhost:3700');
  cy.get('#username').type('admin')
  cy.get('#password').type('1234')
  cy.get('#button-login').click()
})

When("Eu clico no botao logout", () => {
  cy.get('#button-logout').click()
});

Then("Devo visualizar a tela de login", () => {
  cy.contains('#titulo', 'Login');
});

When('Eu tento acessar a pagina de login', () => {
  cy.visit('http://localhost:3700');
})

Then('Devo voltar para a pagina logada', () => {
  cy.url().should('eq', 'http://localhost:3700/logged')
})