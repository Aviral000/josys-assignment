import React from 'react';
import DeptsCrud from './components/DeptsCrud';

function App() {

  console.log(process.env.REACT_APP_NAME);
  return (
    <div>
      <DeptsCrud />
    </div>
  );
}

export default App;
