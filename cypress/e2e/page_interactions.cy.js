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

  // describe("Section name display", () => {
  //   it("Displays the correct section name in the dropdown when scrolling to the first section in main", () => {
  //     cy.get("main section")
  //       .first()
  //       .then(($section) => {
  //         const sectionName = $section.find("h2").text();

  //         cy.wrap($section).scrollIntoView({ duration: 500 });
  //         cy.get("#dropdown p").should("have.text", sectionName);
  //       });
  //   });

  //   it("Displays the correct section name in the dropdown when scrolling to the last section in main", () => {
  //     cy.get("main section")
  //       .last()
  //       .then(($section) => {
  //         const sectionName = $section.find("h2").text();

  //         cy.wrap($section).scrollIntoView({ duration: 500 });
  //         cy.get("#dropdown p").should("have.text", sectionName);
  //       });
  //   });

  //   it("Displays the last section name in the dropdown when moving out of main and hides the dropdown", () => {
  //     cy.get("main section")
  //       .last()
  //       .then(($section) => {
  //         const lastSectionName = $section.find("h2").text();

  //         cy.get("section:not(main section)")
  //           .first()
  //           .scrollIntoView({ duration: 500 });
  //         cy.get("#dropdown p").should("have.text", lastSectionName);
  //         cy.get("#dropdown").should("not.be.visible");
  //       });
  //   });
  // });

  // * progress bar
});

