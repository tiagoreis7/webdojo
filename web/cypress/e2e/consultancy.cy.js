describe("Formulario de Consultoria", () => {
  // O 'describe' serve para agrupar os nossos cenários de teste relacionados a esta página.
  it("Deve solicitar consultoria individual", () => {
    // 1. Arrange (Preparação do ambiente)
    // Chama o comando customizado que configura a tela e acessa a página inicial.
    cy.start();
    
    // Antes de testar o formulário, o usuário precisa estar logado na plataforma.
    // Usamos esse comando customizado para não ficar repetindo os passos de login em todos os testes.
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    // 2. Act & Assert (Ação e Validação inicial)
    // Clica no botão "Formulários" e o próprio comando goTo já se encarrega de validar 
    // se chegamos na página certa buscando pelo título <h1> "Consultoria".
    cy.goTo("Formulários", "Consultoria");
  });
});
