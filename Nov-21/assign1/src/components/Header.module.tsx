import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white shadow-md">
      <div className="text-lg font-semibold">
        Customer Hub
      </div>

      <div className="flex space-x-6">
        <button className="hover:text-blue-400 transition" onClick={() => navigate('/create-customer')}>Create</button>
        <button className="hover:text-blue-400 transition" onClick={() => navigate('/')}>Dashboard</button>
        <button className="hover:text-blue-400 transition">Other Services</button>
      </div>
    </div>
  );
};

export default Header;
