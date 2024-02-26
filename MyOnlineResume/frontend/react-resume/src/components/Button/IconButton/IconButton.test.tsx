import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IconButton } from ".";

describe("IconButton Component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", () => {
    render(<IconButton icon="bug_report" onClick={mockOnClick} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick prop when clicked", () => {
    render(<IconButton icon="bug_report" onClick={mockOnClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    render(<IconButton icon="bug_report" onClick={mockOnClick} disabled />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
