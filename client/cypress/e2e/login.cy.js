import { loginFormData } from "../support/data";

describe("Rick morty fan app", () => {
  it("Login flow", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="email"]').type(loginFormData.email);
    cy.get('[data-test-id="password"]').type(loginFormData.password);
    cy.get('[data-test-id="login-button"]').click();
    cy.url().should("include", "/characters");
    cy.get('[data-test-id="item-1"]').should("be.visible");
  });
});
