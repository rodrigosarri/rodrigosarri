import styled from "styled-components";
import { IconButtonStyle } from "./interface";

export const IconButtonWrapper = styled.button<IconButtonStyle>`
  display: flex;
  width: var(--size-xl);
  height: var(--size-xl);
  border-radius: 50%;
  border: 0 none;
  align-items: center;
  justify-content: center;
  margin: var(--size-xs);
  cursor: pointer;
  background-color: ${({ $clicked }) => ($clicked ? "var(--color-sunny-yellow)" : "var(--color-midnight-gray)")};
`;