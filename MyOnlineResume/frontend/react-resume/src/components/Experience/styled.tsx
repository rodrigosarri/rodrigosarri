import styled from "styled-components";

export const ExperienceBadge = styled.span`
  background: var(--color-smokey-gray);
  padding: var(--size-xs);
  border-radius: var(--size-sm);
  font-size: 0.85em;
  box-sizing: border-box;
  min-width: 56px;
  text-align: center;
`;

export const ExperienceBadgeWrapper = styled.div`
  display: flex;
  gap: var(--size-xs);
  flex-wrap: wrap;
`;

export const ExperienceCompany = styled.h3`
  font-size: 1.2em;
  font-weight: normal;
  color: var(--color-smokey-gray);
  margin: 0;
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: var(--size-xs);
`;

export const ExperienceCompanyTime = styled.span`
  font-size: 0.75em;
  font-weight: normal;
  display: flex;
  gap: var(--size-xs);
`;

export const ExperienceDescription = styled.div`
  line-height: var(--size-md);
  padding: var(--size-xs) 0;
  box-sizing: border-box;

  > p {
    margin-bottom: var(--size-xs);
  }
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExperiencePosition = styled.h2`
  font-size: 1.5em;
  margin: 0;
  width: 100%;
  margin: var(--size-xs) 0;
  color: var(--color-sunny-yellow);
`;

export const ExperienceTitle = styled.h2`
  margin: 0;
  color: var(--color-froggy-green);
  margin: var(--size-xs) 0;
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-md);
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 1024px) {
    padding-right: var(--size-md);
  }
`;
