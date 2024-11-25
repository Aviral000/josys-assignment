import React, { useState } from 'react';
import { addUser, User } from '../services/Emp.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddUserModule = () => {
  const [userObj, setUserObj] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    dept: '',
    role: '',
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emps'] });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(userObj);
    setUserObj({
      name: '',
      email: '',
      dept: '',
      role: '',
    })
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white shadow-lg rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={userObj.name}
            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={userObj.email}
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="dept" className="block font-medium">Department</label>
          <input
            type="text"
            placeholder="Enter department"
            value={userObj.dept}
            onChange={(e) => setUserObj({ ...userObj, dept: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="role" className="block font-medium">Role</label>
          <input
            type="text"
            placeholder="Enter role"
            value={userObj.role}
            onChange={(e) => setUserObj({ ...userObj, role: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserModule;
