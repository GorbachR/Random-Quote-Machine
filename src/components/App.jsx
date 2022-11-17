import React, { createContext, useState } from "react";
import QuoteContainer from "./QuoteContainer";
import ThemeButton from "./ThemeButton";
import "./styles/main-bg.scss";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`theme-${theme} main-bg p-5 d-flex flex-column justify-content-center align-items-center w-fit w-sm-100 min-h-100vh`}
    >
      <ThemeContext.Provider value={theme}>
        <div className={` max-w-xl w-100 me-3`}>
          <ThemeButton setTheme={setTheme} />
        </div>
        <QuoteContainer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
