describe("Index Route", () => {
  it("can click on a link to see all tracks", () => {
    cy.visit("/");
    cy.findByRole("link", { name: /all the Tracks/i }).click();
    cy.url().should("include", "/tracks");
  });
});
