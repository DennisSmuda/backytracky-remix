import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TextInput from "../app/components/TextInput";

const setup = (actionData) => {
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
