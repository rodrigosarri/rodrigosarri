import styled, { keyframes } from "styled-components";
import { SkeletonProps } from "./interface";

const load = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonPulse = styled.div<SkeletonProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "var(--size-md)"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  background-size: 800px 104px;
  animation: ${load} ${({ duration }) => duration || "2s"} infinite linear forwards;
  background-image: ${({ theme }) =>
    theme === "dark"
      ? "linear-gradient(to right, #2a2f37 8%, #3a3f47 18%, #2a2f37 33%)"
      : "linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)"};
`;
