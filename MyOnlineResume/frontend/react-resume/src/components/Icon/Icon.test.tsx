import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from ".";

describe("Icon Component", () => {
  test("renders the icon passed as a prop", () => {
    const testIconName = "home";

    render(<Icon icon={testIconName} />);
    const iconElement = screen.getByText(testIconName);

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("material-symbols-rounded");
  });
});
