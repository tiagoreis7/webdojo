// O bloco 'describe' agrupa uma suíte de testes (vários cenários relacionados a uma mesma funcionalidade)
describe("Login", () => {
  // O comando 'it' (caso de teste) inicia um cenário de teste específico (um caso de uso isolado)
  it("Deve logar com sucesso", () => {
    cy.iniciarTestes(); // Define a resolução da tela para simular um monitor desktop padrão e acessa a página principal da aplicação
    cy.submeterLogin("papito@webdojo.com", "katana123"); // Busca o elemento input com id="email" e digita o email do usuário e busca o elemento input com id="password" e digita a senha

    // cy.get() busca um elemento na tela através de um seletor CSS (aqui estamos usando um atributo de teste 'data-cy')
    cy.get('[data-cy="user-name"]')
      // .should() faz uma asserção (validação). Aqui verifica se o elemento está visível ao usuário
      .should("be.visible")
      // .and() encadeia outra asserção no mesmo elemento em vez de chamar .should() de novo. Aqui valida o texto exato.
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]') // Busca o elemento input com id="welcome-message"
      .should("be.visible") // Verifica se o elemento está visível ao usuário
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes.",
      ); // Valida o texto exato do elemento
  });

  it("Não deve logar com senha inválida", () => {
    cy.iniciarTestes(); // Define a resolução da tela para simular um monitor desktop padrão e acessa a página principal da aplicação
    cy.submeterLogin("papito@webdojo.com", "katana321"); // Busca o elemento input com id="email" e digita o email do usuário e busca o elemento input com id="password" e digita a senha

    // cy.contains() busca um elemento visível na tela que contenha um texto específico, não sendo necessário conhecer o seu seletor
    cy.contains("Acesso negado! Tente novamente.").should("be.visible");
  });

  it("Não deve logar com email inválido", () => {
    cy.iniciarTestes(); // Define a resolução da tela para simular um monitor desktop padrão e acessa a página principal da aplicação
    cy.submeterLogin("404@webdojo.com", "katana123"); // Busca o elemento input com id="email" e digita o email do usuário e busca o elemento input com id="password" e digita a senha

    cy.contains("Acesso negado! Tente novamente.").should("be.visible"); // Verifica se o elemento está visível ao usuário
  });
});
