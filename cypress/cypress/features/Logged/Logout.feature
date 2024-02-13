Feature: Logout
  Scenario: Deslogar corretamente no sistema
    Given Que eu esteja logado no sistema
    When Eu clico no botao logout
    Then Devo visualizar a tela de login