describe("Tracks Route", () => {
  it("shows a list of tracks and can visit a track", () => {
    cy.visit("/tracks");
    const headline = cy.findByText(/all tracks 🎺/i);
    headline.should("exist");
    const tracks = cy.get("[data-testid='track-listing']");
    tracks.should("exist");
    tracks.first().click();
    cy.url().should("include", "/track/");
  });
});
