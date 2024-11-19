import React from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}
  
  const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const theme = {
        color: "white",
        backgroundColor: "black",
    };
  
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
  };
  
  export { ThemeProvider };
