describe.only("Main Content", function() {
  beforeEach(() => {
    cy.visit("http://localhost:19006")
  });

  it("gets the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8")
  });

  it("has a page title", () => {
    cy.title().should("include", "fstrdr")
  });

  it("shows Header title", () => {
    cy.get("h1").should("have.text", "Fst Rdr")
  });
});
