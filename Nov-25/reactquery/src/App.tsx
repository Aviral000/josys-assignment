import React from 'react';
import './App.css';
import UserModule from './components/User.module';
import AddUserModule from './components/AddUser.module';

function App() {
  return (
    <div>
      <UserModule />
      <hr />
      <AddUserModule />
    </div>
  );
}

export default App;
