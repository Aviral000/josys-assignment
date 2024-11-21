import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from './pages/CustomerLogin.page';
import Dashboard from './pages/Dashboard.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/create-customer' element={<CustomerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
