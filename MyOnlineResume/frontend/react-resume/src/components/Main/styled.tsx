import styled from "styled-components";
import { MainStyle } from "./interface";

export const MainCenteredDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  box-sizing: border-box;
  gap: var(--size-lg);
  flex-direction: column;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const MainWrapper = styled.main<MainStyle>`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--size-xl);
  background-color: ${({ mode }) => (mode === "light" ? "var(--color-snowy-white)" : "var(--color-midnight-sail)")};
  color: ${({ mode }) => (mode === "light" ? "var(--color-midnight-sail)" : "var(--color-snowy-white)")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;
