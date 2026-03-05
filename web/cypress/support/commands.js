// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("iniciarTestes", () => {
  // Define a resolução da tela para simular um monitor desktop padrão
  cy.viewport(1440, 900);

  // Acessa a página principal da aplicação
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("submeterLogin", (email, password) => {
  // Busca o elemento input com id="email" e digita o email do usuário
  cy.get("#email").type(email);
  // Busca o elemento input com id="password" e digita a senha
  cy.get("#password").type(password);

  // O comando contains busca um elemento pelo texto.
  // Aqui procuramos um botão que contenha exatamente o texto "Entrar" e clicamos nele.
  // Isso é melhor que usar IDs genéricos ou inexistentes.
  cy.contains("button", "Entrar").click();
});
