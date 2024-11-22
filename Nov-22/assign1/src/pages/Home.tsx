import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RoleContext from '../routes/RoleContext';

const Home: React.FC = () => {
  const role = useContext(RoleContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {role && (
            <>
              <Link 
                to="/emp" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-700">Employees</h2>
                <p className="text-gray-600 mt-2">Manage employee information</p>
              </Link>
              <Link 
                to="/dept" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-700">Departments</h2>
                <p className="text-gray-600 mt-2">View department details</p>
              </Link>
            </>
          )}
          {!role && (
            <Link 
              to="/login" 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-700">Login</h2>
              <p className="text-gray-600 mt-2">Please login to access features</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;