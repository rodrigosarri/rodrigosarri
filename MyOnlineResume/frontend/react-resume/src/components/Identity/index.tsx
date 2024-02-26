import React, { FC, useState } from "react";

import { IdentityProps } from "./interface";
import { ThemeState } from "src/redux/theme/interface";

import {
  IdentityButtonWrapper,
  IdentityData,
  IdentityName,
  IdentityTitle,
  IdentityWrapper,
} from "./styled";

import { setThemeToDark, setThemeToLight, themeStore } from "src/redux/theme";

import { IconButton } from "src/components";

export const Identity: FC<IdentityProps> = ({ name, title }) => {
  const [theme, setTheme] = useState(
    (() => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? storedTheme : "dark";
    })
  );

  themeStore.subscribe(() => {
    const newTheme = themeStore.getState();
    setTheme(newTheme.currentTheme);
  });

  const getClicked = (theme: string | null, type: string): boolean =>
    theme === type;

  const handleToggleTheme = (theme: ThemeState["currentTheme"]): void => {
    if (theme === "dark") {
      themeStore.dispatch(setThemeToDark());
    } else if (theme === "light") {
      themeStore.dispatch(setThemeToLight());
    }
  };

  return (
    <>
      <IdentityWrapper>
        <IdentityData>
          <IdentityName id="about-me">{name}</IdentityName>
          <IdentityTitle>{title}</IdentityTitle>
        </IdentityData>
        <IdentityButtonWrapper>
          <IconButton
            testId="dark-mode"
            icon="dark_mode"
            clicked={getClicked(theme, "dark")}
            onClick={() => handleToggleTheme("dark")}
          />
          <IconButton
            testId="light-mode"
            icon="light_mode"
            clicked={getClicked(theme, "light")}
            onClick={() => handleToggleTheme("light")}
          />
        </IdentityButtonWrapper>
      </IdentityWrapper>
    </>
  );
};
