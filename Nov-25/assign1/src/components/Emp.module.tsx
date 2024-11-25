import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchUsers, User } from '../services/Emp.service';
import UserDeleteButton from '../features/UserDeleteButton';
import UserUpdateButton from '../features/UserUpdateButton';

const UserModule = () => {
  const { data, error, isError, isLoading } = useQuery<User[], Error>({
    queryKey: ['emps'],
    queryFn: fetchUsers,
  });

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (isLoading) {
    return <p className="text-blue-500">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Department</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <UserUpdateButton user={user} />
              <td className="border border-gray-300 px-4 py-2">
                <UserDeleteButton id={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserModule;
