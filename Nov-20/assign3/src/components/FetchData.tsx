import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async (): Promise<UserType[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

interface UserType {
    id: number,
    name: string,
    email: string
}

const FetchData: React.FC = () => {
    const { data, isLoading, error } = useQuery<UserType[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
      });

  if (isLoading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data!</p>;

  return (
    <div className="mt-4 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul className="list-disc pl-5">
        {data?.map((user: UserType) => (
          <li key={user.id} className="mb-2">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
