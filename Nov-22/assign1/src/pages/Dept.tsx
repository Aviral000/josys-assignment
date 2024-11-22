import React, { useEffect, useState } from 'react';
import { getDepartments } from '../services/deptService';

const Dept: React.FC = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept: any) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{dept.name}</h2>
            <p className="text-gray-600">{dept.description}</p>
            <div className="mt-4">
              <span className="text-sm text-gray-500">
                Employees: {dept.employeeCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dept;