/// <reference types="cypress" />

describe("Page Interactions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // * dropdon toggle
  it("Toggles the dropdown menu visibility on button click", () => {
    cy.get("#dropdownButton").click();
    cy.get("#dropdownMenu").should("not.have.class", "hidden");

    cy.get("#dropdownButton").click();
    cy.get("#dropdownMenu").should("have.class", "hidden");
  });

  // * navbar sticky
  it("Sticks navbar div to the top of the page over main content", () => {
    cy.get("main").scrollIntoView();
    cy.get("#dropdown").should("have.class", "sticky");
    cy.get("#dropdownMenu").should("have.class", "sticky");

    cy.get("footer").scrollIntoView();
    // cy.get("#dropdown").should("not.have.class", "sticky");
    // cy.get("#dropdownMenu").should("not.have.class", "sticky");
  });

  // * section name display

  // * progress bar
});

