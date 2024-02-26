import React from "react";
import { render, screen } from "@testing-library/react";
import { Photo } from ".";

describe("Photo component", () => {
  it("renders the image wrapper and image", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    render(<Photo src={src} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", src);
  });

  it("renders the alt text", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    const alt = "Imagem aleatória";
    render(<Photo src={src} alt={alt} />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", alt);
  });

  it("renders the title text", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    const alt = "Imagem com título aleatório";
    render(<Photo src={src} alt={alt} />);

    expect(screen.getByRole("img")).toHaveAttribute("title", alt);
  });

  it("has a descriptive alt text", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    render(<Photo src={src} />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "Imagem de perfil");
  });

  it("has a unique title text", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    render(<Photo src={src} />);

    expect(screen.getByRole("img")).toHaveAttribute("title", "Imagem de perfil");
  });

  it("has the correct width / height and fit", () => {
    const src = "https://fastly.picsum.photos/id/892/200/300.jpg?hmac=9MUtm-RM2UIFVmP8I80S9TuWKk93ZEPqQLpOf-y1BwE";
    render(<Photo src={src} />);

    expect(screen.getByRole("img")).toHaveStyle({
      "width": "100%",
      "height": "100%",
      "object-fit": "cover"
    });
  });

});
