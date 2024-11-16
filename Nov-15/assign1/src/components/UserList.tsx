import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiService';

interface UserProp {
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const UserList: React.FC = () => {
  const [data, setData] = useState<UserProp[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<UserProp[]>([]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fetchedData = await getData();
    setData(fetchedData);
    setVisibleUsers([]);
  };

  useEffect(() => {
    if (data.length > 0) {
      data.forEach((user, index) => {
        setTimeout(() => {
          setVisibleUsers((prev) => [...prev, user]);
        }, 250 * index);
      });
    }
  }, [data]);

  return (
    <div>
      {data.length === 0 && (<button onClick={handleClick} className="border-white border-2" >
        Click me
      </button>)}
      {visibleUsers.map((user) => (
        <div key={user.email} className="flex items-center gap-3 m-6">
          <div>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          </div>
          <div>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const UserListMemo = React.memo(UserList);

export default UserListMemo;
