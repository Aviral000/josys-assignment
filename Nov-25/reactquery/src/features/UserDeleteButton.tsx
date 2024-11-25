import React from 'react';
import { deleteUser } from '../services/User.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UserDeleteButton = ({ id }:{ id: number }) => {
  const useQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
        useQuery.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    mutation.mutate(id);
  };

  return (
    <button onClick={handleDelete} style={{ background: "red", color: 'white' }}>
        Delete
    </button>
  );
};

export default UserDeleteButton;