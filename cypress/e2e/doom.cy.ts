/// <reference types='cypress' />

describe("monty hall", () => {
  it("devem selecionar o número de portas e presentes.", () => {
    // cada it representa um teste
    cy.visit("http://localhost:3000/"); // visita uma parte de uma pagina
    // cy.get = busca um elemento
    // .type = insere um texto
    cy.get("#inc").click(); // 1x
    cy.get("#inc").click(); // 2x
  });
  it("devem iniciar o jogo", () => {
    // cada it representa um teste
    cy.get("#play").next(); // 1x

  });
  it("devem poder selecionar as portas.", () => {
    // cada it representa um teste
  });
});
