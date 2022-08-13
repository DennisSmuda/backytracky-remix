describe("Sequencer Route", () => {
  it("can play with a sequencer", () => {
    cy.visit("/generator");
    cy.findByRole("button", { name: /play/i }).click();
    cy.findByRole("button", { name: /stop/i }).click();

    const buttons = cy.findAllByRole("button");
    buttons.should("have.length.above", 100);

    const shrinkButtons = cy.findAllByRole("button", { name: /shrink/i });
    shrinkButtons.first().click();
    cy.findByRole("button", { name: /expand/i }).click();
  });
});
