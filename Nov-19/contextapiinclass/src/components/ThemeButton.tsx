import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

class ThemedButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) =>
          theme ? (
            <button style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
              Themed Button
            </button>
          ) : (
            <button>Default Button</button>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;
