import styled from "styled-components";

export const ProfileAbout = styled.div`
  grid-column: span 4;
  text-align: justify;
`;

export const ProfileContact = styled.p`
  margin: 0;
`;

export const ProfileContacts = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
  margin: var(--size-sm) 0;
`;

export const ProfileTitleAbout = styled.h2`
  color: var(--color-froggy-green);
`;

export const ProfileWrapper = styled.aside`
  flex: 0 0 100%;
  max-width: 100%;
  gap: var(--size-xs);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
`;
