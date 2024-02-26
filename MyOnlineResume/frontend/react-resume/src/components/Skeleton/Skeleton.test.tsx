import React from "react";
import { render, screen } from "@testing-library/react";
import { Skeleton } from ".";
import { ThemeProvider } from "styled-components";

const renderWithTheme = (component: any, theme: any) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={{ currentTheme: theme }}>{children}</ThemeProvider>
  );
  return render(component, { wrapper: Wrapper });
};

describe("Skeleton", () => {
  it("renders correctly", () => {
    renderWithTheme(<Skeleton testId="skeleton" />, "dark");
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("applies custom width, height, and borderRadius", () => {
    renderWithTheme(<Skeleton testId="skeleton-custom" width="50%" height="20px" borderRadius="10px" />, "dark");
    const skeleton = screen.getByTestId("skeleton-custom");
    expect(skeleton).toHaveStyle("width: 50%");
    expect(skeleton).toHaveStyle("height: 20px");
    expect(skeleton).toHaveStyle("border-radius: 10px");
  });

  it("changes appearance based on theme", () => {
    const { rerender } = renderWithTheme(<Skeleton testId="skeleton-theme" />, "dark");
    let skeleton = screen.getByTestId("skeleton-theme");
    expect(skeleton).toHaveStyle(`background-image: linear-gradient(to right, #2a2f37 8%, #3a3f47 18%, #2a2f37 33%)`);

    rerender(<Skeleton testId="skeleton-theme" />);
    skeleton = screen.getByTestId("skeleton-theme");
    expect(skeleton).toHaveStyle(`background-image: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`);
  });
});
