import styled from "styled-components";

export const SkillDot = styled.span<{ $filled: boolean }>`
  display: inline-block;
  width: var(--size-lg);
  height: var(--size-lg);
  border-radius: 50%;
  background-color: ${({ $filled }) => ($filled ? "var(--color-sky-high-blue)" : "#4A4A4A")};
`;

export const SkillItem = styled.li`
  margin: var(--size-xs) 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--size-sm);
  border-bottom: solid 1px #4A4A4A;
  padding-bottom: var(--size-sm);
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const SkillMarbles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SkillTitle = styled.h2`
  color: var(--color-froggy-green);
`;

export const SkillTitleTec = styled.h3`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 0;
`;
