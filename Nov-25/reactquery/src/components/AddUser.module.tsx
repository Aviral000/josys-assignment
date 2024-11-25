import React, { useState } from 'react';
import { addUser, User } from '../services/User.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddUserModule = () => {
  const [userObj, setUserObj] = useState<Omit<User, "id">>({ name: "", email: "" });
  const useQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
        useQuery.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(userObj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="name"
            value={userObj.name}
            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="email"
            value={userObj.email}
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserModule;
