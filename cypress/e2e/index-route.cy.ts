describe("Index Route", () => {
  it("can click on a link to see all tracks or generate your own", () => {
    cy.visit("/");
    cy.findByText(/features/i);
    cy.findByText(/faq/i);
    cy.findByRole("link", { name: /make your own/i });
    cy.findByRole("link", { name: /see some tracks/i }).click();
    cy.url().should("include", "/tracks");
  });
});
