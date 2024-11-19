import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import ThemedButton from './components/ThemeButton';

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
