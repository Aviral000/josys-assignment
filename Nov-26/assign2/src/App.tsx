import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/login/login.module';
import SignUpForm from './components/signup/signup.module';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
