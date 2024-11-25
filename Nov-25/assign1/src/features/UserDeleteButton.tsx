import React from 'react';
import { deleteUser } from '../services/Emp.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UserDeleteButton = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emps'] });
    },
  });

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    mutation.mutate(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default UserDeleteButton;
