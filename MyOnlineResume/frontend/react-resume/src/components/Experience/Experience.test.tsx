import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Experience } from ".";

const mockJobs = [
  {
    position: "Desenvolvedor Backend",
    company: "Empresa dos backends",
    startDate: "JANEIRO 2020",
    endDate: "Até agora",
    description: "Criando e desenvolvelndo as loucuras das regras de negócios e dados dos usuários",
    technologies: ["Laravel", "Node.js", "GraphQL"],
  },
  {
    position: "Desenvolvedor Frontend",
    company: "Empresa dos frontends",
    startDate: "DEZEMBRO 2019",
    endDate: "DEZEMBRO 2019",
    description: "Fazendo as telas bonitinhas para os usuários reclamarem que não funciona",
    technologies: ["Vue.js", "Vuex"],
  },
];

describe("Experience Component", () => {
  it("renders job experiences correctly", () => {
    render(<Experience jobs={mockJobs} isLoading={false} />);

    expect(screen.getByText("Experiências profissionais")).toBeInTheDocument();

    mockJobs.forEach((job) => {
      expect(screen.getByText(job.position)).toBeInTheDocument();
      expect(screen.getByText(`${job.company},`)).toBeInTheDocument();
      expect(screen.getByText(`${job.startDate} - ${job.endDate}`)).toBeInTheDocument();
      expect(screen.getByText(job.description, {selector: "div"})).toBeInTheDocument();

      job.technologies?.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });
});
