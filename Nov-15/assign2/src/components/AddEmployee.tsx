import React, { useState } from 'react';
import { Employee } from '../model/Employee.model';

const AddEmployee = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);
  const [depttNo, setDepttNo] = useState<number>(0);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee = new Employee(name, job, salary, depttNo);
    setEmployees([...employees, newEmployee]);
    setName("");
    setJob("");
    setSalary(0);
    setDepttNo(0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <section className="w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label htmlFor="job" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter job title"
              required
            />
          </div>
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter salary"
              required
            />
          </div>
          <div>
            <label htmlFor="depttNo" className="block text-sm font-medium text-gray-700">
              Department Number
            </label>
            <input
              type="number"
              id="depttNo"
              value={depttNo}
              onChange={(e) => setDepttNo(Number(e.target.value))}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter department number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Add Employee
          </button>
        </form>
      </section>

      <section className="w-1/2 p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Employee List</h2>
        <div className="space-y-4">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.job}</p>
                <p className="text-sm text-gray-600">Salary: ${employee.salary}</p>
                <p className="text-sm text-gray-600">Dept: {employee.depttNo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AddEmployee;
