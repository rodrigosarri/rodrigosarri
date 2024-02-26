import React from "react";
import { render, screen } from "@testing-library/react";
import { Skills } from ".";

describe("Skill component", () => {
  it("renders individual skills correctly", () => {
    const skills = [
      { technology: "React", experience: 3, highlight: false },
      { technology: "JavaScript", experience: 4, highlight: true },
    ];

    render(<Skills skills={skills} isLoading={false} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();

    const skillElements = screen.getAllByRole("heading", { name: /React|JavaScript/i });

    skillElements.forEach((skillElement, index) => {
      expect(skillElement).toHaveTextContent(skills[index].technology);
    });
  });
});
