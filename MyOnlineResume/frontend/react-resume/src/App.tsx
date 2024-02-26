import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { ThemeState } from "src/redux/theme/interface";

import { themeStore } from "src/redux/theme";
import { Main } from "src/components";

import { About } from "src/pages/About";

const App = () => {

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
    <>
      <GlobalStyle />
      <div className="App">
        <Main mode={theme}>
          <About />
        </Main>
      </div>
    </>
  );
};

export default App;
