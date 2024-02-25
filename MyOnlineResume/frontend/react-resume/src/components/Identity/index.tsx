import React, { FC } from "react";

import { IdentityProps } from "./interface";

import {
  IdentityData,
  IdentityName,
  IdentityTitle,
  IdentityWrapper,
} from "./styled";

export const Identity: FC<IdentityProps> = ({ name, title }) => {
  return (
    <IdentityWrapper>
      <IdentityData>
        <IdentityName id="about-me">{name}</IdentityName>
        <IdentityTitle>{title}</IdentityTitle>
      </IdentityData>
    </IdentityWrapper>
  );
};
