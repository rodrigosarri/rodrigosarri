import { ReactNode } from "react";

export interface MainProps {
  children: ReactNode;
  mode: "light" | "dark";
}

export interface MainStyle {
  mode: "light" | "dark";
}