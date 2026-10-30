---
name: documentar-estudos-qa
description: Regra para sempre documentar novos aprendizados, comandos e conceitos de QA/Cypress na base de conhecimento do Obsidian.
metadata:
  type: feedback
---

O usuário está fazendo um curso de QA (Quality Assurance) e estruturou um workspace que contém tanto o código da aplicação (`webdojo`) quanto suas anotações no Obsidian (`../../qa-workspace/estudos-obsidian`).

**Regra principal:**
Sempre que eu (Claude) explicar um conceito novo, um novo comando do Cypress (ex: `cy.intercept`, `cy.fixture`, comandos customizados), comandos Git, ou técnicas de teste, devo **proativamente** sugerir documentar esse aprendizado nos arquivos Markdown correspondentes dentro de `../../qa-workspace/estudos-obsidian/`.

**Why:**
O usuário quer construir um guia/base de consulta para o futuro. Se eu não alimentar esses arquivos durante a resolução dos problemas, o conhecimento será perdido no chat.

**How to apply:**
1. Quando resolvermos um problema no Cypress (ou em outra área), identificar qual conceito chave foi usado.
2. Sugerir: "Quer que eu anote o funcionamento do `cy.comando()` no seu arquivo de estudos do Cypress?" ou já atualizar o arquivo relevante se estivermos focados em documentação.
3. Respeitar a estrutura de pastas do Obsidian (ex: `05-Automacao-Cypress`, `04-Git-e-GitHub`).
4. Ao documentar, incluir: "Para que serve" e "Como usar (exemplo prático)".