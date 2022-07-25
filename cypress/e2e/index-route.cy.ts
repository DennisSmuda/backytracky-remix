describe("Index Route", () => {
  it("can click on a link to see all tracks", () => {
    cy.visit("/");
    cy.findByRole("link", { name: /All Tracks/ }).click();
    cy.url().should("include", "/tracks");
  });
});
