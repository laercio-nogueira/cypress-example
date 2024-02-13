Feature: Login
  Scenario: Logar corretamente no sistema
    Given Eu esteja na pagina de login do sistema
    When Eu informar o usuario e senha
    And Clicar no botao login
    Then Devo visualizar a tela de bem vindo ao sistema

  Scenario: Apresentar mensagem de erro se usuario ou senha estiverem incorretos
    Given Eu esteja na pagina de login do sistema
    When Eu informar o usuario e senha incorretos
    And Clicar no botao login
    Then Devo visualizar uma mensagem dizendo que o usuario ou senha estao incorretos

  Scenario: Apresentar mensagem de erro se nao preencher login e senha
    Given Eu esteja na pagina de login do sistema
    And Clicar no botao login
    Then Devo visualizar uma mensagem dizendo que é obrigatorio usuario e senha

  Scenario: Tentar acessar area logada, sem logar
    Given Eu esteja na pagina de login do sistema
    And tento acessar area logada
    Then Devo ser direciona para a tela de login
