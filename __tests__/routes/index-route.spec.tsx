import React from "react";
// Testing library
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";

// App
import Index from "../../app/routes/_index";

describe("Home page", () => {
  it("renders a heading", () => {
    // Arrange
    render(<Index />, { wrapper: MemoryRouter });
    // Act
    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });
    // Assert
    expect(heading).toBeInTheDocument();
  });
});
