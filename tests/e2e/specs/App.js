// https://docs.cypress.io/api/introduction/api.html

describe("App.vue", () => {
  it("Has welcome to Vue h1", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
  it("Has 2 menu items on home page", () => {
    cy.get("#nav a").should("have.length", 2);
  });
  it("Has About page", () => {
    cy.visit("/about");
    //  .get("[data-test-id='about-title']")
    cy.contains("h1", "This is an about page");
  });
  it("Can navigate from About back to Home", () => {
    cy.get('[href="/"]').click();
  });
});
