Feature: Logged
  Scenario: Usuario Logado, tentando acessar a pagina deslogada
    Given Que eu esteja logado no sistema
    When Eu tento acessar a pagina de login
    Then Devo voltar para a pagina logada