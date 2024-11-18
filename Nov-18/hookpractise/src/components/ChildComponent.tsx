import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChildComponent: React.FC = () => {
const [users, setUsers] = useState<any[]>([]);

//useEffect stops the re-render issue either parents is triggering or the child.
useEffect(() => {
    axios.get('https://dummyjson.com/users').then((response) => {
        // console.log(response.data.users);
        setUsers(response.data.users);
    })
}, [])


// if console value is outside of the useEffect it will going to re-render again and again 
// depends on the parents component is triggering or not.
// console.log("Hello");

  return (
    <div>
      {users.map((user) => (
        <div className='p-4 text-lg font-serif hover:text-teal-700 w-fit'>
            {user.firstName}
        </div>
      ))}
    </div>
  )
}

const ChildComponentMemo = React.memo(ChildComponent);

export default ChildComponentMemo;
