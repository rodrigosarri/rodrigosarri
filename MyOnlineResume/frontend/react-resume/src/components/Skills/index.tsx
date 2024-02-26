import React, { FC } from "react";
import { SkillsProps } from "./interface";
import {
  SkillList,
  SkillTitle,
  SkillItem,
  SkillTitleTec,
  SkillMarbles,
  SkillDot,
} from "./styled";

import { Skeleton } from "src/components";

export const Skills: FC<SkillsProps> = ({ skills, isLoading }) => {
  const maxDots = 5;

  const renderDots = (experience: number) => {
    return Array.from({ length: maxDots }, (_, i) => (
      <SkillDot key={`dot${i}`} $filled={i < experience} />
    ));
  };

  return (
    <>
      <SkillTitle>Habilidades</SkillTitle>
      {!isLoading && skills ? (
        <SkillList>
          {skills.map(({ technology, experience }, index) => (
            <SkillItem key={index}>
              <SkillTitleTec>{technology}</SkillTitleTec>
              <SkillMarbles>{renderDots(experience)}</SkillMarbles>
            </SkillItem>
          ))}
        </SkillList>
      ) : (
        <>
          <SkillList>
            <SkillItem>
              <SkillTitleTec>
                <Skeleton />
              </SkillTitleTec>
              <SkillMarbles>
                <Skeleton />
              </SkillMarbles>
            </SkillItem>
          </SkillList>
        </>
      )}
    </>
  );
};
