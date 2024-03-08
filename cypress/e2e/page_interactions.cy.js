/// <reference types="cypress" />

describe("Page Interactions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Dropdown Toggle", () => {
    it("Toggles the dropdown menu visibility on button click", () => {
      cy.get("#dropdownButton").click();
      cy.get("#dropdownMenu").should("not.have.class", "hidden");

      cy.get("#dropdownButton").click();
      cy.get("#dropdownMenu").should("have.class", "hidden");
    });
  });

  describe("Sticky Navbar", () => {
    it("Sticks navbar div to the top of the page over main content", () => {
      cy.get("main").scrollIntoView();
      cy.get("#dropdown").should("have.class", "sticky");
      cy.get("#dropdownMenu").should("have.class", "sticky");
      cy.get("#dropdown").should("be.visible");
      cy.get("#dropdownButton").click();
      cy.get("#dropdownMenu").should("be.visible");

      cy.get("#dropdownButton").click();
      cy.get("footer").scrollIntoView();
      cy.get("#dropdown").should("not.be.visible");
      cy.get("#dropdownMenu").should("not.be.visible");
    });
    it("Sticks navbar div should be out of view below main", () => {
      cy.get("main").scrollIntoView();
      cy.get("#dropdownButton").click();
      cy.get("#dropdownMenu").should("be.visible");

      cy.get("#dropdownButton").click();
      cy.get("footer").scrollIntoView();
      cy.get("#dropdown").should("not.be.visible");
      cy.get("#dropdownMenu").should("not.be.visible");
    });
  });

  // * section name display

  // * progress bar
});

