Given("Eu esteja na pagina de login do sistema", () => {
  cy.visit('http://localhost:3700');
})

When("Eu informar o usuario e senha", () => {
  cy.get('#username').type('admin')
  cy.get('#password').type('1234')
});

And("Clicar no botao login", () => {
  cy.get('#button-login').click()
});

Then("Devo visualizar a tela de bem vindo ao sistema", () => {
  cy.contains('#titulo', 'Bem vindo a area logada');
});

When('Eu informar o usuario e senha incorretos', () => {
  cy.get('#username').type('login_errado')
  cy.get('#password').type('12345')
})

Then('Devo visualizar uma mensagem dizendo que o usuario ou senha estao incorretos', () => {
  cy.contains('.error-login', 'Erro no usuario ou senha');
})

Then('Devo visualizar uma mensagem dizendo que é obrigatorio usuario e senha', () => {
  cy.contains('.error-login', 'Preencha o Login e Senha');
})

And('tento acessar area logada', () => {
  cy.visit('http://localhost:3700');
})

Then('Devo ser direciona para a tela de login', () => {
  cy.url().should('eq', 'http://localhost:3700/')
})