import { faker } from "@faker-js/faker";

describe("Login Route", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("can login a user, sets an session-cookie and shows notification", function () {
    const user = { username: "dennis", password: "twixrox" };
    cy.get("input[name=username]").type(user.username);
    cy.get("input[name=password]").type(`${user.password}{enter}`);

    cy.url().should("include", "/tracks");
    cy.getCookie("BT_session").should("exist");
    cy.findByRole("status").should("contain", "You are logged in");
  });

  it("shows a server error on wrong credentials", () => {
    cy.get("input[name=username]").type(
      faker.name.firstName() + faker.name.lastName()
    );
    cy.get("input[name=password]").type(
      `${faker.random.word()}${faker.random.word()}{enter}`
    );
    cy.findByRole("alert").should("contain", "combination is incorrect");
  });
});
