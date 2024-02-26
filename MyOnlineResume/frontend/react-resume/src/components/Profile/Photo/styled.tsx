import styled from "styled-components";

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PhotoWrapper = styled.div`
  border-top-right-radius: var(--size-md);
  border-bottom-left-radius: var(--size-md);
  overflow: hidden;
  min-height: 315px;
`;
