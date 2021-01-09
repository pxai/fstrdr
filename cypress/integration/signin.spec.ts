describe.only("Main Content", function() {
  beforeEach(() => {
    cy.visit("http://localhost:19006")
  });

  it("shows signin page", () => {
    cy.get("div[role=button]").eq(1).click();
    cy.get("h2").should("have.text", "Sign In");
  });

  it("opens recover page", () => {
    cy.get("div[role=button]").eq(1).click();
    cy.get("a").eq(0).click();
    cy.get("input[type=password]").should("have.length", 3);
    cy.get('input[type=password]').eq(0).should('be.visible');
    cy.get('input[type=password]').eq(1).should('be.visible');
  });
});
