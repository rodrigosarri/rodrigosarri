import React, { FC } from "react";

import { MainProps } from "./interface";
import {
  MainCenteredDiv,
  MainWrapper
} from "./styled";

export const Main: FC<MainProps> = ({ children, mode }) => {
  return (
    <>
      <MainWrapper mode={mode}>
        <MainCenteredDiv>{children}</MainCenteredDiv>
      </MainWrapper>
    </>
  );
};
