import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Profile } from ".";

describe("Profile Component", () => {
  const mockProfileProps = {
    photoUrl: "test-photo.jpg",
    aboutMe: "Este é um texto sobre mim de teste",

    contacts: [
      { title: "Email", value: "test@test.com" },
      { title: "LinkedIn", value: "linkedin.com/in/test" }
    ],

    skills: [
      {
        technology: "React",
        experience: 4,
      },
      {
        technology: "Node.js",
        experience: 3,
      }
    ],
    skillsLoading: false,
  };

  it("renders the photo, about me, contacts, and skills correctly", () => {
    render(<Profile {...mockProfileProps} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", mockProfileProps.photoUrl);
    expect(screen.getByText(mockProfileProps.aboutMe)).toBeInTheDocument();

    mockProfileProps.contacts.forEach(contact => {
      expect(screen.getByText(`${contact.title}: ${contact.value}`)).toBeInTheDocument();
    });

    mockProfileProps.skills.forEach(({ technology }) => {
      expect(screen.getByText(technology)).toBeInTheDocument();
    });
  });
});
