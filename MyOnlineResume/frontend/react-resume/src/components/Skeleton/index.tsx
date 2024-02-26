import React, { FC, useState } from "react";
import { SkeletonProps } from "./interface";
import { ThemeState } from "src/redux/theme/interface";

import { SkeletonPulse } from "./styled";

import { themeStore } from "src/redux/theme";

export const Skeleton: FC<SkeletonProps> = ({
  id,
  testId,
  duration,
  width,
  height,
  borderRadius
}) => {
  const [theme, setTheme] = useState<ThemeState["currentTheme"]>(
    (() => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? (storedTheme as (ThemeState["currentTheme"])) : "dark";
    })
  );

  themeStore.subscribe(() => {
    const newTheme = themeStore.getState();
    setTheme(newTheme.currentTheme);
  });

  return (
    <SkeletonPulse
      id={id}
      data-testid={testId}
      duration={duration}
      width={width}
      height={height}
      $borderRadius={borderRadius}
      theme={theme}
    />
  );
};
