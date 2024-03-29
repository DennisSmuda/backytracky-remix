import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import type { ActionData } from "../app/components/TextInput";
import TextInput from "../app/components/TextInput";
import { expect } from "vitest";

const setup = (actionData: ActionData) => {
  const utils = render(
    <TextInput name="username" label="Username" actionData={actionData} />
  );
  const input = utils.getByDisplayValue(actionData.fields.name);

  return {
    input,
    ...utils,
  };
};

describe("Text Input Component", () => {
  it("renders correctly", () => {
    render(<TextInput name="username" label="Username" />);
    screen.getByLabelText(/username/i);
  });

  it("shows a label", async () => {
    const { input } = setup({
      fields: { name: "" },
    });

    expect(await screen.queryByRole("alert")).toBeFalsy();
    expect(input).toBeInTheDocument();
  });

  it("can change the input's value", () => {
    const { input, getByDisplayValue } = setup({
      fields: { name: "testname" },
      fieldErrors: { name: "" },
    });

    fireEvent.change(input, { target: { value: "newName" } });

    getByDisplayValue("newName");
  });

  it("shows an error message", async () => {
    const { getByText } = setup({
      fields: { name: "testname" },
      fieldErrors: { name: "name field has an error" },
    });

    expect(await screen.queryByRole("alert")).toBeTruthy();
    getByText("name field has an error");
  });
});
