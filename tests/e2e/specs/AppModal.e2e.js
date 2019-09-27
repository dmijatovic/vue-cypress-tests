describe("App Modal test", () => {
  it("Shows a modal on click", () => {
    cy.visit("http://localhost:8080");
    //click on the button
    cy.get('[data-test-id="btn-show-modal"]').click();
    //take a title element
    cy.get('[data-test-id="app-modal-title"]')
      .contains("Default title")
      .should("be.visible");
  });
  it("Closes modal on click", () => {
    //cy.visit("/");
    //click on the button
    cy.get('[data-test-id="closeMe"]')
      .click()
      .should("not.exist");
  });
});
