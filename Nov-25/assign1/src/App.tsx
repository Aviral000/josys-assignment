import React from 'react';
import UserModule from './components/Emp.module';
import AddUserModule from './components/AddEmp.module';

function App() {
  return (
    <div>
      <AddUserModule />
      <hr />
      <UserModule />
    </div>
  );
}

export default App;