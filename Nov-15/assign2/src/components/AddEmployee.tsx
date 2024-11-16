import React, { useState } from "react";
import { Employee } from "../model/Employee.model";

const AddEmployee = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);
  const [depttNo, setDepttNo] = useState<number>(0);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (selectedEmployee !== null) {
      const filterDuplicate = employees.findIndex(emp => emp.name.toLowerCase() === name.toLowerCase());
      if(filterDuplicate !== -1) {
        alert("User with that name is Already exist. Please use suffix/prefix to add with same name");
        return;
      }
      const updatedEmployees = employees.map((employee, index) =>
        index === selectedEmployee
          ? new Employee(name, job, salary, depttNo)
          : employee
      );
      setEmployees(updatedEmployees);
      setSelectedEmployee(null);
    } else {
      const filterDuplicate = employees.findIndex(emp => emp.name.toLowerCase() === name.toLowerCase());
      if(filterDuplicate !== -1) {
        alert("User with that name is Already exist. Please use suffix/prefix to add with same name");
        return;
      }
      const newEmployee = new Employee(name, job, salary, depttNo);
      setEmployees([...employees, newEmployee]);
    }

    setName("");
    setJob("");
    setSalary(0);
    setDepttNo(0);
  };

  const handleUpdate = (index: number) => {
    const employee = employees[index];
    setName(employee.name);
    setJob(employee.job);
    setSalary(employee.salary);
    setDepttNo(employee.depttNo);
    setSelectedEmployee(index);
  };

  const handleDelete = (index: number) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };
  
  const handleCancel = () => {
    setSelectedEmployee(null);
    setName("");
    setJob("");
    setSalary(0);
    setDepttNo(0);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <section className="w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          {selectedEmployee !== null ? "Update Employee" : "Add New Employee"}
        </h2>
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
            className={`w-full ${
              selectedEmployee !== null ? "bg-green-500" : "bg-blue-500"
            } text-white py-2 rounded-lg hover:opacity-90 focus:ring ${
              selectedEmployee !== null ? "focus:ring-green-300" : "focus:ring-blue-300"
            }`}
          >
            {selectedEmployee !== null ? "Update Employee" : "Add Employee"}
          </button>
          {selectedEmployee !== null && <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:opacity-90 focus:ring focus:ring-zinc-600"
            onClick={handleCancel}
          >
            Cancel
          </button>}
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
              <div className="flex space-x-2">
                <button
                  onClick={() => handleUpdate(index)}
                  className="text-sm text-white bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 focus:ring focus:ring-yellow-300"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const AddEmployeeMemo = React.memo(AddEmployee);

export default AddEmployeeMemo;
