import React, { useState } from 'react';
import { updateUser, User } from '../services/Emp.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UserUpdateButton = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (updatedData: Omit<User, 'id'>) => updateUser(user.id, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emps'] });
    },
  });

  const handleEditClick = () => setIsEditing(true);

  const handleDoneClick = () => {
    mutation.mutate(updatedUser);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setUpdatedUser(user);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof User) => {
    setUpdatedUser({ ...updatedUser, [field]: e.target.value });
  };

  return (
    <>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={updatedUser.name}
            onChange={(e) => handleChange(e, 'name')}
            className="border border-gray-300 rounded p-1 w-full"
          />
        ) : (
          user.name
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="email"
            value={updatedUser.email}
            onChange={(e) => handleChange(e, 'email')}
            className="border border-gray-300 rounded p-1 w-full"
          />
        ) : (
          user.email
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={updatedUser.dept}
            onChange={(e) => handleChange(e, 'dept')}
            className="border border-gray-300 rounded p-1 w-full"
          />
        ) : (
          user.dept
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={updatedUser.role}
            onChange={(e) => handleChange(e, 'role')}
            className="border border-gray-300 rounded p-1 w-full"
          />
        ) : (
          user.role
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleDoneClick}
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Done
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Update
          </button>
        )}
      </td>
    </>
  );
};

export default UserUpdateButton;
