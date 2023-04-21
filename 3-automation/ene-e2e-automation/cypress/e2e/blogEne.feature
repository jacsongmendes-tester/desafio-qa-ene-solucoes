Feature: Validando Blog da Ene Solucoes 
    Background: Accesse o Blog da Ene
    Given que eu acesso a página da Ene Soluções
    And clico no botão Blog

Scenario: Validar carregamento do blog da Ene
    Then devo visualizar a página do blog da Ene

Scenario: Pesquisar tecnologia UI/UX no blog da Ene
    And pesquiso pela tecnologia "UI/UX"
    When clico no botão Pesquisar
    Then devo visualizar as tecnologias relacionadas no blog da Ene

Scenario: Pesquisar tecnologia não existente no blog da Ene
    And pesquiso pela tecnologia "VAZIA"
    When clico no botão Pesquisar
    Then Então devo visualizar a lista vazia e a mensagem "Nenhum resultado encontrado!"

Scenario: Cadastrar email válido para boletim de notícia
    And inserir o endereço de email válido
    When clicar no botão Enviar
    Then devo visualizar uma caixa de diálogo com a mensagem de sucesso

Scenario: Cadastrar email inválido para boletim de notícias
    When inserir um endereço de email inválido
    Then devo visualizar uma mensagem de erro "Insira um e-mail válido."

Scenario: Validar seção Termos de uso
    When clico no label termos de uso
    Then devo ser redirecionado para seção termos de uso