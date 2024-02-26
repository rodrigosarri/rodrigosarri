import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Identity } from ".";

describe("Identity component", () => {
  it("renders name and title correctly", () => {
    const { getByTestId, getByText } = render(
      <Identity name="Rodrigo Sarri" title="Desenvolvedor Full Stack Sênior" />
    );

    expect(getByTestId("about-me")).toHaveTextContent("Rodrigo Sarri");
    expect(getByText("Desenvolvedor Full Stack Sênior")).toBeInTheDocument();
  });

  it("toggles theme on button click", () => {
    const { getByTestId } = render(<Identity name="Rodrigo Sarri" title="Desenvolvedor Full Stack Sênior" />);

    const darkModeButton = getByTestId("dark-mode");
    fireEvent.click(darkModeButton);

    const lightModeButton = getByTestId("light-mode");
    expect(lightModeButton).toHaveAttribute("data-testid", "light-mode");
  });
});
