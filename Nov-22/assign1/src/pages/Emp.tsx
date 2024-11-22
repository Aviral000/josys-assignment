import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/empService';
import type { Employee } from '../services/empService';

const Emp: React.FC = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      setError('Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(emp => emp.id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      setError('Failed to delete employee');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Employees</h1>
        <Link
          to="/emp/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={emp.image || '/placeholder-avatar.png'}
                alt={emp.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{emp.name}</h2>
              <p className="text-gray-600">{emp.position}</p>
              <p className="text-gray-500">{emp.department}</p>
              <p className="text-gray-500">
                Salary: ${emp.salary.toLocaleString()}
              </p>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => navigate(`/emp/edit/${emp.id}`)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                {deleteConfirm === emp.id ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDelete(emp.id!)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="text-gray-600 hover:text-gray-800"
                      >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteConfirm(emp.id!)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Emp;