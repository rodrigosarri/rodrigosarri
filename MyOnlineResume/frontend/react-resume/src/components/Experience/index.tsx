import React, { FC } from "react";
import { ExperienceProps } from "./interface";
import {
  ExperienceBadge,
  ExperienceBadgeWrapper,
  ExperienceCompany,
  ExperienceCompanyTime,
  ExperienceDescription,
  ExperienceItem,
  ExperiencePosition,
  ExperienceTitle,
  ExperienceWrapper,
} from "./styled";

import { Skeleton } from "src/components";

export const Experience: FC<ExperienceProps> = ({ isLoading, jobs }) => {
  return (
    <>
      <ExperienceWrapper aria-labelledby="experience">
        <ExperienceTitle>Experiências profissionais</ExperienceTitle>
        {!isLoading && jobs ? (
          jobs.map(
            (
              {
                position,
                company,
                startDate,
                endDate,
                description,
                technologies,
              },
              index
            ) => (
              <ExperienceItem key={index}>
                <ExperiencePosition>{position}</ExperiencePosition>
                <ExperienceCompany>
                  {company},{" "}
                  <ExperienceCompanyTime>
                    {startDate} - {endDate}
                  </ExperienceCompanyTime>
                </ExperienceCompany>
                <ExperienceDescription
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {technologies && (
                  <ExperienceBadgeWrapper>
                    {technologies.map((tech, index) => (
                      <ExperienceBadge key={index}>{tech}</ExperienceBadge>
                    ))}
                  </ExperienceBadgeWrapper>
                )}
              </ExperienceItem>
            )
          )
        ) : (
          <ExperienceItem>
            <ExperiencePosition>
              <Skeleton width="100%" />
            </ExperiencePosition>
            <ExperienceCompany>
              <Skeleton />
              <ExperienceCompanyTime>
                <Skeleton width="80px" /> - <Skeleton width="80px" />
              </ExperienceCompanyTime>
            </ExperienceCompany>
            <ExperienceDescription>
              <Skeleton height="350px" />
            </ExperienceDescription>
          </ExperienceItem>
        )}
      </ExperienceWrapper>
    </>
  );
};
