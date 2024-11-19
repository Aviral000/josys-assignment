import React from "react";

interface ThemeContextType {
  color: string;
  backgroundColor: string;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
