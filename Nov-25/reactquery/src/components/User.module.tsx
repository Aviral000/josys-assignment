import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchUsers, User } from '../services/User.service';
import UserDeleteButton from '../features/UserDeleteButton';

const UserModule = () => {
const { data, error, isError, isPending } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers
})

if(isError) {
    return <p>Error, {error.message}</p>
}

if(isPending) {
    return <p>Loading...</p>
}

  return (
    <div>
      {data?.map((user) => (
        <>
            <li>{user.id}. {user.name}: {user.email}
                <UserDeleteButton id={user.id} />
            </li>
        </>
      ))}
    </div>
  )
}

export default UserModule;