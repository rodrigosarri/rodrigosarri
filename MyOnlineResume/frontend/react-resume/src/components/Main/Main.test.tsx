import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Main } from ".";

describe("Main Component", () => {
  it("renders correctly", () => {
    render(
      <Main mode="light">
        <div>Corpo do componente</div>
      </Main>
    );

    expect(screen.getByText("Corpo do componente")).toBeInTheDocument();
  });

  it("applies light mode styles correctly", () => {
    const { container } = render(
      <Main mode="light">
        <div>Corpo do componente</div>
      </Main>
    );

    expect(container.firstChild).toHaveStyle("background-color: var(--color-snowy-white)");
    expect(container.firstChild).toHaveStyle("color: #1A2737");
  });

  it("applies dark mode styles correctly", () => {
    const { container } = render(
      <Main mode="dark">
        <div>Corpo do componente</div>
      </Main>
    );

    expect(container.firstChild).toHaveStyle("background-color: #1A2737");
    expect(container.firstChild).toHaveStyle("color: var(--color-snowy-white)");
  });
});
